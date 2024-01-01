import { TThemeTypes } from './TThemeTypes';

export type TThemeTypesNotTransparent = Exclude<TThemeTypes, 'transparent'>;
