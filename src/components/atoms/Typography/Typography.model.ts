import { CSSProp } from 'styled-components';

import { TypographyList } from '@/components/atoms/Typography/Typography.style';
import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { typography } from '@/design/theme/designSizes';
import { TgenerateFontVariants } from '@/components/atoms/Typography/utils/TypographyStyleVariants';
import { TTypographyVariants } from '@/types/TTypographyVariants';

export type TTypography = {
  elType?: keyof typeof TypographyList;
  variant: TTypographyVariants;
  externalStyle?: CSSProp;
  htmlFor?: string;
  themeType?: TUiColorsNotTransparent;
  textAlign?: 'left' | 'center' | 'right';
  layer?: TLayer;
} & Omit<React.HTMLAttributes<HTMLElement>, 'style'> &
  Omit<TgenerateFontVariants, 'themeFonts'>;

export type TTypographyObj = typeof typography;
