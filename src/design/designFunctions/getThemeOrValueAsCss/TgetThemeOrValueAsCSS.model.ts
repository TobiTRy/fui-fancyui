import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';
import { TSpacings } from '@/types/TSpacings';

// Define a type that maps your inputs to the desired output types
export type TThemeValueMap = {
  borderRadius: TBorderRadiusSizes;
  spacing: TSpacings;
  default: string | number;
};

// TThemeValueOrCSS is a generic type that can extend 'border' or 'spacing',
// and it will return the corresponding type from TypeMapping
export type TThemeValueOrCSS<T extends keyof TThemeValueMap = 'default'> = TThemeValueMap[T] | string | number;
