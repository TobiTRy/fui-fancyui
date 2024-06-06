import { TThemeArrayOrValueCSS } from '@/design/designFunctions/arrayToCssValues';
import { getThemeOrValueAsCSS } from '@/design/designFunctions/getThemeOrValueAsCss';

const calcBorderRadiusWithPadding = (
  borderRadius: TThemeArrayOrValueCSS,
  padding: TThemeArrayOrValueCSS,
  inset = true
) => {
  // check if they are arrays or single values
  let splitBorderRadius;

  //handleborderRadius when its too an object
  if (typeof borderRadius === 'object' && !Array.isArray(borderRadius)) {
    splitBorderRadius = [borderRadius.t, borderRadius.r, borderRadius.b, borderRadius.l];
  } else {
    splitBorderRadius = Array.isArray(borderRadius) ? borderRadius : [borderRadius];
  }

  //handle padding when its too an object
  let splitPadding;
  if (typeof padding === 'object' && !Array.isArray(padding)) {
    splitPadding = [padding.t, padding.r, padding.b, padding.l];
  } else {
    splitPadding = Array.isArray(padding) ? padding : [padding];
  }

  // define empty arrays
  const paddingArray: string[] = [];
  const borderRadiusArray: string[] = [];

  // get the css value for each value
  splitBorderRadius.forEach((value) => {
    const cssValue = getThemeOrValueAsCSS(value, 'spacing');

    const cssValueWithUnit = cssValue !== '0' ? cssValue : `${cssValue}px`;

    borderRadiusArray.push(cssValueWithUnit);
  });

  splitPadding.forEach((value) => {
    const cssValue = getThemeOrValueAsCSS(value, 'spacing');

    const cssValueWithUnit = cssValue !== '0' ? cssValue : `${cssValue}px`;

    paddingArray.push(cssValueWithUnit);
  });

  // check if they have the same number of values
  if (
    borderRadiusArray.length !== paddingArray.length &&
    !(borderRadiusArray.length > 0 && paddingArray.length === 1)
  ) {
    console.error(
      'borderRadius and padding should have the same number of values or borderRadius should have more than 1 value and padding should have 1 value'
    );
    return '';
  }

  // define the operator for the css calc
  const operator = inset ? '-' : '+';

  // generate the new border radius array with the padding in css calc
  const newBorderRadiusArray = borderRadiusArray.map((borderRadius, index) => {
    // check if they have a unit when they are a number they doesn't have a unit
    if (Number(borderRadius) || Number(paddingArray[index])) {
      console.error('borderRadius and padding should have a unit');
      return '';
    }

    // check if the border radius / padding is a valid css value
    const borderIsValid = borderRadius ? borderRadius : '0px';
    const formatPaddingAdd = paddingArray[index] ? `(${operator}${paddingArray[index]})` : '0px';

    return `calc(${borderIsValid} + ${formatPaddingAdd})`;
  });

  // return the new border radius as a string
  return newBorderRadiusArray.join(' ');
};

export default calcBorderRadiusWithPadding;
