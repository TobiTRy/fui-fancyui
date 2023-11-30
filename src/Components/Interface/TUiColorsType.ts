import { TthemeColorGroup, themeColors } from '@/Components/design/color/designColor';

export type TUiColorsType = { [key in keyof typeof themeColors | 'transparent']: TthemeColorGroup };
