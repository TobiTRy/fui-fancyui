import { CSSProp } from 'styled-components';

import { TSize } from '@/components/molecules/TextAvatar/utils/getSize';
import { TLayer } from '@/types/TLayer';
import { TTypographyList } from '@/types/TTypographyList';

import { TgetBorderRadiusViaSize } from '@/design/designFunctions/getBorderRadiusViaSize';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

export type TTextAvatarProps = {
  text?: string;
  rounded?: TgetBorderRadiusViaSize;
  size?: TSize | string;
  color?: string;
  backgroundColor?: string;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
  externalStyle?: CSSProp;
  fontSizes?: TTypographyList;
  letterLength?: number;
};
