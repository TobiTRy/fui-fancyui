import getThemeOrValueForCSS from '@/design/designFunctions/getThemeOrValueAsCss/getThemeOrValueAsCss';
import { TThemeArrayOrValueCSS, TValueMap } from './TArrayValues.model';

// --------------------------------------------------------------------------- //
// ---------- this function is for the calc wich edege has a radius ---------- //
// --------------------------------------------------------------------------- //
const arrayToCssValues = <T extends keyof TValueMap = 'default'>(values?: TThemeArrayOrValueCSS, themeSetting?: T) => {
  if (!values || !values.toString().length) return '';

  // Initialize an empty array for the cleaned values
  let cleanedValues: (string | number | TValueMap[T])[] = [];

  // Handle the case where values is a single value
  if (typeof values === 'string' || typeof values === 'number') {
    cleanedValues.push(values);
  } else if (Array.isArray(values)) {
    // Filter out undefined values and assert the type to exclude 'undefined'
    cleanedValues = values.filter((value): value is string | number | TValueMap[T] => value !== undefined);
  }

  switch (cleanedValues.length) {
    // if one value is given, all edges are the same
    case 1: {
      const singleValue = getThemeOrValueForCSS(cleanedValues[0], themeSetting);
      return ` ${singleValue} `;
    }
    // if two values are given, top/bottom and left/right are the same
    case 2: {
      const [topBottomValue, leftRightValue] = cleanedValues.map((item) => getThemeOrValueForCSS(item, themeSetting));
      return ` ${topBottomValue} ${leftRightValue} `;
    }
    // if three values are given, top, left/right and bottom are the same
    case 3: {
      const [top, leftRight, bottom] = cleanedValues.map((item) => getThemeOrValueForCSS(item, themeSetting));
      return ` ${top} ${leftRight} ${bottom} ${leftRight} `;
    }
    // if four values are given, all edges are different
    case 4: {
      const [top, right, bottom, left] = cleanedValues.map((item) => getThemeOrValueForCSS(item, themeSetting));
      return ` ${top} ${right} ${bottom} ${left} `;
    }
  }
};

export default arrayToCssValues;
