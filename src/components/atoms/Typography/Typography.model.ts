import { CSSProp } from 'styled-components';

import { TypographyList } from '@/components/atoms/Typography/Typography.style';
import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { typography } from '@/design/theme/designSizes';
import { TgenerateFontVariants } from '@/components/atoms/Typography/utils/TypographyStyleVariants';

export type TTypography = {
  elType?: keyof typeof TypographyList;
  variant?: TTypographyNewList;
  externalStyle?: CSSProp;
  htmlFor?: string;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
} & Omit<React.HTMLAttributes<HTMLElement>, 'style'> &
  Omit<TgenerateFontVariants, 'themeFonts'>;

export type TTypographyNewList = keyof typeof typography;
export type TTypographyObj = typeof typography;
