import { TComponentSizesMid } from '@/types/TComponentSizes';
import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import React from 'react';

export type TFancyMiniprofile = {
  title?: string;
  subTitle?: string;
  Image: React.ReactElement;
  sizeC?: TComponentSizesMid;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
  shadow?: boolean;
  alignImage?: 'left' | 'right';
};

export type TFancyMiniprofileWithHTMLProps = TFancyMiniprofile & React.HTMLProps<HTMLDivElement>;
