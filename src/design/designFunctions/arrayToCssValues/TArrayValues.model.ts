import { TThemeValueOrCSS, TThemeValueMap } from '@/design/designFunctions/getThemeOrValueAsCss';

// the rounded edges are an array of 4 values
export type TThemeArrayCssValues<T extends keyof TThemeValueMap = 'default'> = [
  TThemeValueOrCSS<T>?,
  TThemeValueOrCSS<T>?,
  TThemeValueOrCSS<T>?,
  TThemeValueOrCSS<T>?,
];

export type TThemObjectCssValues<T extends keyof TThemeValueMap = 'default'> = {
  t?: TThemeValueOrCSS<T>;
  r?: TThemeValueOrCSS<T>;
  b?: TThemeValueOrCSS<T>;
  l?: TThemeValueOrCSS<T>;
};

// the input can be an array or a single value
export type TThemeArrayOrValueCSS<T extends keyof TThemeValueMap = 'default'> =
  | TThemeArrayCssValues<T>
  | TThemeValueOrCSS<T>
  | TThemObjectCssValues<T>;
