import { TthemeColorGroup, themeColors } from '@/Components/Design/color/designColor';

export type TUiColorsType = { [key in keyof typeof themeColors | 'transparent']: TthemeColorGroup };
