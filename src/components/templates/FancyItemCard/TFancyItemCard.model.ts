import { TFancyImageWrapper } from '@/components/atoms/FancyImageWrapper';
import { TArrayToCssValues, TValue } from '@/design/designFunctions/arrayToCssValues';
import { TTypography } from '@/components/atoms/Typography';

export type TFancyItemCard = {
  image?: TFancyImageWrapper;
  title?: TTypography;
  subtitle?: TTypography;
  description?: TTypography;
  externalStyle?: string;
  contentGap?: string;
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  padding?: TArrayToCssValues | TValue;
};
