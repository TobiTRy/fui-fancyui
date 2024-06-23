import { getThemeOrValueAsCSS } from '@/design/designFunctions/getThemeOrValueAsCss';
import { TThemeArrayOrValueCSS } from './TArrayValues.model';
import { TThemeValueMap } from '@/design/designFunctions/getThemeOrValueAsCss';

// --------------------------------------------------------------------------- //
// ---------- this function is for the calc wich edege has a radius ---------- //
// --------------------------------------------------------------------------- //
const arrayToCssValues = <T extends keyof TThemeValueMap = 'default'>(
  values?: TThemeArrayOrValueCSS,
  themeSetting?: T
) => {
  if (!values || (typeof values !== 'object' && !values.toString().length) || Object.keys(values).length === 0)
    return '';

  // Initialize an empty array for the cleaned values
  let cleanedValues: (string | number | TThemeValueMap[T])[] = [];

  // Handle the case where values is a single value
  if (typeof values === 'string' || typeof values === 'number') {
    cleanedValues.push(values);
  } else if (typeof values === 'object' && Array.isArray(values) === false) {
    // Handle the case where values is an object
    const { t = 0, r = 0, b = 0, l = 0 } = values;

    cleanedValues = [t, r, b, l].filter((value): value is string | number | TThemeValueMap[T] => value !== undefined);
  } else if (Array.isArray(values)) {
    // Filter out undefined values and assert the type to exclude 'undefined'
    cleanedValues = values.filter((value): value is string | number | TThemeValueMap[T] => value !== undefined);
  }

  switch (cleanedValues.length) {
    // if one value is given, all edges are the same
    case 1: {
      const singleValue = getThemeOrValueAsCSS(cleanedValues[0], themeSetting);
      return ` ${singleValue} `;
    }
    // if two values are given, top/bottom and left/right are the same
    case 2: {
      const [topBottomValue, leftRightValue] = cleanedValues.map((item) => getThemeOrValueAsCSS(item, themeSetting));
      return ` ${topBottomValue} ${leftRightValue} `;
    }
    // if three values are given, top, left/right and bottom are the same
    case 3: {
      const [top, leftRight, bottom] = cleanedValues.map((item) => getThemeOrValueAsCSS(item, themeSetting));
      return ` ${top} ${leftRight} ${bottom} ${leftRight} `;
    }
    // if four values are given, all edges are different
    case 4: {
      const [top, right, bottom, left] = cleanedValues.map((item) => getThemeOrValueAsCSS(item, themeSetting));
      return ` ${top} ${right} ${bottom} ${left} `;
    }
  }
};

export default arrayToCssValues;
