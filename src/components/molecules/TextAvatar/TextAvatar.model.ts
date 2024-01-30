import { CSSProp } from 'styled-components';

import { TSize } from '@/components/molecules/TextAvatar/utils/getSize';
import { TLayer } from '@/types/TLayer';

import { TgetBorderRadiusViaSize } from '@/design/designFunctions/getBorderRadiusViaSize';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { TTypographyVariants } from '@/types/TTypographyVariants';

export type TTextAvatarProps = {
  text?: string;
  rounded?: TgetBorderRadiusViaSize;
  size?: TSize | string;
  color?: string;
  backgroundColor?: string;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
  externalStyle?: CSSProp;
  fontSizes?: TTypographyVariants;
  letterLength?: number;
};
