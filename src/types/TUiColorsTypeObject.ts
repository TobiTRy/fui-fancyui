import { TthemeColorGroup, themeColors } from '@/design/theme/generateThemeColor/generateThemeColor';

export type TUiColorsTypeObject = { [key in keyof typeof themeColors]: TthemeColorGroup };

export type TUIColorsTypeInputString = { [key in keyof typeof themeColors]: string };
