import { CSSProp } from 'styled-components';

import { TSize } from '@/components/molecules/TextAvatar/utils/getSize';
import { TLayer } from '@/types/TLayer';
import { TThemeTypes } from '@/types/TThemeTypes';
import { TTypography } from '@/types/TTypography';

import { TgetBorderRadiusViaSize } from '@/design/designFunctions/getBorderRadiusViaSize';

export type TTextAvatarProps = {
  text?: string;
  rounded?: TgetBorderRadiusViaSize;
  size?: TSize | string;
  color?: string;
  backgroundColor?: string;
  themeType?: TThemeTypes;
  layer?: TLayer;
  externalStyle?: CSSProp;
  fontSizes?: TTypography;
  letterLength?: number;
};
