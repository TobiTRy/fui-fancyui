const calcBorderRadiusWithPadding = (borderRadius: string, padding: string, inset = true) => {
  // check if they have the same unit
  const splitBorderRadius = borderRadius.split(' ');
  const splitPadding = padding.split(' ');

  if (
    splitBorderRadius.length !== splitPadding.length &&
    !(splitBorderRadius.length > 0 && splitPadding.length === 1)
  ) {
    console.error(
      'borderRadius and padding should have the same number of values or borderRadius should have more than 1 value and padding should have 1 value'
    );
    return '';
  }

  // check if they have a unit when they are a number they doesn't have a unit
  if (Number(borderRadius) || Number(padding)) {
    console.error('borderRadius and padding should have a unit');
    return '';
  }

  const operator = inset ? '-' : '+';

  // retun the css value with the padding in css clac
  let cssValue = '';
  if (splitBorderRadius.length > 0 && splitPadding.length === 1) {
    cssValue = splitBorderRadius
      .map((borderRadiusValue) => {
        console.log('borderRadius', `calc(${borderRadiusValue} + (${operator}${padding}))`);
        return `calc(${borderRadiusValue} + (${operator}${padding}))`;
      })
      .join(' ');
    return cssValue;
  } else if (splitBorderRadius.length === splitPadding.length) {
    cssValue = splitBorderRadius
      .map((borderRadiusValue, index) => {
        return `calc(${borderRadiusValue} + (${operator}${splitPadding[index]}))`;
      })
      .join(' ');
    return cssValue;
  }
};

export default calcBorderRadiusWithPadding;
