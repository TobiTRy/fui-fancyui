import { themeStore } from '@/design/theme/themeStore';

import { TArrayToCssValues, TValue } from './IArrayValues.model';
import { TSpacings } from '@/interface/TSpacings';

// Type guard to check if a value is a TSpacings type
const isTSpacings = (value: TValue): value is TSpacings => {
  const themeSpacings = themeStore.getState().theme.spacing;
  return value in themeSpacings;
};

// Updated getThemeValue function
const getThemeOrValue = (value: TValue): string => {
  const themeSpacings = themeStore.getState().theme.spacing;
  if (isTSpacings(value)) {
    return `${themeSpacings[value]}`; // No need for 'as TSpacings' now
  }
  return `${value}`;
};

// --------------------------------------------------------------------------- //
// ---------- this function is for the calc wich edege has a radius ---------- //
// --------------------------------------------------------------------------- //
const arrayToCssValues = (values?: TArrayToCssValues) => {
  if (!values?.length) return '';

  //check edges are valid
  const validValue = values.filter((values) => values !== undefined) as TValue[];

  switch (validValue.length) {
    // if one value is given, all edges are the same
    case 1: {
      const singleValue = getThemeOrValue(validValue[0]);
      return ` ${singleValue} `;
    }
    // if two values are given, top/bottom and left/right are the same
    case 2: {
      const [topBottomValue, leftRightValue] = validValue.map(getThemeOrValue);
      return ` ${topBottomValue} ${leftRightValue} `;
    }
    // if three values are given, top, left/right and bottom are the same
    case 3: {
      const [top, leftRight, bottom] = validValue.map(getThemeOrValue);
      return ` ${top} ${leftRight} ${bottom} ${leftRight} `;
    }
    // if four values are given, all edges are different
    case 4: {
      const [top, right, bottom, left] = validValue.map(getThemeOrValue);
      return ` ${top} ${right} ${bottom} ${left} `;
    }
  }
};

export default arrayToCssValues;
