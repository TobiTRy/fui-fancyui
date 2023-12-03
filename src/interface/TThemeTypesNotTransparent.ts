import { TThemeTypes } from './TUiColors';

export type TThemeTypesNotTransparent = Exclude<TThemeTypes, 'transparent'>;
