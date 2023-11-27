import { TthemeColorGroup, themeColors } from '@/Components/UI/Design/color/designColor';

export type TUiColorsType = { [key in keyof typeof themeColors | 'transparent']: TthemeColorGroup };
