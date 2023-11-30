import { TthemeColorGroup, themeColors } from '@/components/design/theme/designColor';

export type TUiColorsType = { [key in keyof typeof themeColors | 'transparent']: TthemeColorGroup };
