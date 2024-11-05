import { HTMLAttributes } from 'react';
import { CSSProp } from 'styled-components';

import { TLayer } from '@/types/TLayer';

import { TgetBorderRadiusViaSize } from '@/design/designFunctions/getBorderRadiusViaSize';
import { TTypographyVariants } from '@/types/TTypographyVariants';
import { TUiColorsMain } from '@/types/TUiColorsMain';
import { TglobalElementSizesWithFit } from '@/types/TGlobalElementSizes';

export type TTextAvatar = {
  text?: string;
  borderRadius?: TgetBorderRadiusViaSize;
  sizeC?: TglobalElementSizesWithFit | (string & {});
  color?: string;
  backgroundColor?: string;
  themeType?: TUiColorsMain;
  layer?: TLayer;
  externalStyle?: CSSProp;
  fontSizes?: TTypographyVariants;
  letterLength?: number;
  casing?: 'uppercase' | 'lowercase' | 'capitalize';
};

export type TTTextAvatarWithHTMLAttrs = TTextAvatar & HTMLAttributes<HTMLDivElement>;
