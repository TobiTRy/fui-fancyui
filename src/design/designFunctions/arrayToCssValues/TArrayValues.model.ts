import { TSpacings } from '@/types/TSpacings';
import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';

// Define a type that maps your inputs to the desired output types
export type TValueMap = {
  borderRadius: TBorderRadiusSizes;
  spacing: TSpacings;
  default: string | number;
};

// TThemeCSSValue will now be a generic type that can extend 'border' or 'spacing',
// and it will return the corresponding type from TypeMapping
export type TThemeCSSValue<T extends keyof TValueMap = 'default'> = TValueMap[T] | string | number;

// the rounded edges are an array of 4 values
export type TThemeArrayCssValues<T extends keyof TValueMap = 'default'> = [
  TThemeCSSValue<T>?,
  TThemeCSSValue<T>?,
  TThemeCSSValue<T>?,
  TThemeCSSValue<T>?,
];

// the input can be an array or a single value
export type TThemeArrayOrValueCSS<T extends keyof TValueMap = 'default'> = TThemeArrayCssValues<T> | TThemeCSSValue<T>;
