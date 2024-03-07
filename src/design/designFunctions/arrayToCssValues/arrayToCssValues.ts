import { themeStore } from '@/design/theme/themeStore';

import { TArrayToCssValues, TValue, TValueMap } from './TArrayValues.model';
import { TSpacings } from '@/types/TSpacings';

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
const arrayToCssValues = <T extends keyof TValueMap>(values?: TArrayToCssValues | TValue, themeSetting?: T) => {
  if (!values || !values.toString().length) return '';

  //create an array to store the values
  let inputValue: (TValueMap[T] | string | number)[] = [];

  //check if values is a string and push it to the array
  if (typeof values === 'string') inputValue.push(values);

  //check edges are valid
  if (Array.isArray(values)) inputValue = values.filter((values) => values !== undefined);

  switch (inputValue.length) {
    // if one value is given, all edges are the same
    case 1: {
      const singleValue = getThemeOrValue(inputValue[0]);
      return ` ${singleValue} `;
    }
    // if two values are given, top/bottom and left/right are the same
    case 2: {
      const [topBottomValue, leftRightValue] = inputValue.map(getThemeOrValue);
      return ` ${topBottomValue} ${leftRightValue} `;
    }
    // if three values are given, top, left/right and bottom are the same
    case 3: {
      const [top, leftRight, bottom] = inputValue.map(getThemeOrValue);
      return ` ${top} ${leftRight} ${bottom} ${leftRight} `;
    }
    // if four values are given, all edges are different
    case 4: {
      const [top, right, bottom, left] = inputValue.map(getThemeOrValue);
      return ` ${top} ${right} ${bottom} ${left} `;
    }
  }
};

export default arrayToCssValues;
