import { TFancyImageWrapper } from '@/components/atoms/FancyImageWrapper';
import { TThemeArrayOrValueCSS } from '@/design/designFunctions/arrayToCssValues';
import { TTypography } from '@/components/atoms/Typography';
import { CSSProp } from 'styled-components';

export type TFancyItemCard = {
  image?: TFancyImageWrapper;
  title?: TTypography;
  subtitle?: TTypography;
  description?: TTypography;
  externalStyle?: CSSProp;
  contentGap?: string;
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  padding?: TThemeArrayOrValueCSS;
};
