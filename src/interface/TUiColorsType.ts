import { TthemeColorGroup, themeColors } from '@/design/theme/designColor';

export type TUiColorsType = { [key in keyof typeof themeColors | 'transparent']: TthemeColorGroup };
