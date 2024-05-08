import { TComponentSizes } from '@/types/TComponentSizes';
import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import React from 'react';

export type TFancyMiniprofile = {
  title?: string;
  subTitle?: string;
  Image: React.ReactElement;
  sizeC?: TComponentSizes;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
  shadow?: boolean;
  alignImage?: 'left' | 'right';
};

export type TFancyMiniprofileWithHTMLProps = TFancyMiniprofile & React.HTMLProps<HTMLDivElement>;
