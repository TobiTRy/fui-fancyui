import { TthemeColorGroup, themeColors } from '@/Components/design/theme/designColor';

export type TUiColorsType = { [key in keyof typeof themeColors | 'transparent']: TthemeColorGroup };
