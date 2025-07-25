import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { HTMLAttributes } from 'react';
import { CSSProp } from 'styled-components';

export type TFancyLoadingBar = {
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
  externalStyle?: CSSProp;
};

export type TFancyLoadingBarHTMLProps = HTMLAttributes<HTMLDivElement>;

export type TFancyLoadingBarWithHTMLProps = TFancyLoadingBar & TFancyLoadingBarHTMLProps;
