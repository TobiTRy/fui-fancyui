import { CSSProp } from 'styled-components';

import { TypographyList } from '@/components/atoms/Typography/Typography.style';
import { TLayer } from '@/interface/TLayer';
import { TThemeTypesNotTransparent } from '@/interface/TThemeTypesNotTransparent';

export type TTypography = {
  type?: keyof typeof TypographyList;
  variant?: keyof typeof TypographyList;
  weight?: 'normal' | 'bold';
  addLineHeight?: boolean;
  externalStyle?: CSSProp;
  htmlFor?: string;
  themeType?: TThemeTypesNotTransparent;
  layer?: TLayer;
} & Omit<React.HTMLAttributes<HTMLElement>, 'style'>;
