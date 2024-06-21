import { TcalcBorderRadiusWithPadding } from '@/design/designFunctions/calcBorderRadiusWithPadding/TcalcBorderRadiusWithPadding.model';
import { getThemeOrValueAsCSS } from '@/design/designFunctions/getThemeOrValueAsCss';

const calcBorderRadiusWithPadding = (props: TcalcBorderRadiusWithPadding) => {
  const { borderRadius, padding, inset = false, offset } = props;
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
  const offsetValue = offset ? ` + ${offset}px` : '';

  const newBorderRadiusArray = borderRadiusArray.map((borderRadius, index) => {
    const validBorderRadius = isValidCSSValue(borderRadius) ? borderRadius : '0px';
    const padding = paddingArray[index];

    // Handle negative padding for inset
    const validPadding = isValidCSSValue(padding) ? padding : '0px';
    const paddingValue =
      inset && parseFloat(validPadding) < 0
        ? ` + ${Math.abs(parseFloat(validPadding))}px` // Add for negative inset
        : ` ${inset ? '-' : '+'} ${validPadding}`; // Correct spacing

    // Use borderRadius if no padding needed
    if (paddingValue.trim() === '+' || paddingValue.trim() === '-') {
      return `${validBorderRadius}${offsetValue}`;
    }

    return `calc(${validBorderRadius}${paddingValue}${offsetValue})`;
  });
  // return the new border radius as a string
  return newBorderRadiusArray.join(' ');
};

function isValidCSSValue(value: string) {
  // This is a basic check. More comprehensive validation might be needed for production code.
  return typeof value === 'string' && value.trim() !== '';
}

export default calcBorderRadiusWithPadding;
