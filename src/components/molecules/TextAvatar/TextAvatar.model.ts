import { CSSProp } from 'styled-components';

import { TSize } from '@/components/molecules/TextAvatar/utils/getSize';
import { TLayer } from '@/types/TLayer';

import { TgetBorderRadiusViaSize } from '@/design/designFunctions/getBorderRadiusViaSize';
import { TTypographyVariants } from '@/types/TTypographyVariants';
import { TUiColorsMain } from '@/types/TUiColorsMain';

export type TTextAvatar = {
  text?: string;
  borderRadius?: TgetBorderRadiusViaSize;
  sizeC?: TSize | string;
  color?: string;
  backgroundColor?: string;
  themeType?: TUiColorsMain;
  layer?: TLayer;
  externalStyle?: CSSProp;
  fontSizes?: TTypographyVariants;
  letterLength?: number;
  casing?: 'uppercase' | 'lowercase' | 'capitalize';
};

export type TTTextAvatarWithHTMLAttrs = TTextAvatar & React.HTMLAttributes<HTMLDivElement>;
