import { TFancySVGAtom } from '@/components/atoms/FancySVGAtom';
import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

import React from 'react';
import { CSSProp } from 'styled-components';

export type TFancyXButton = {
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
  externalStyle?: CSSProp;
  sizeC?: TFancySVGAtom['sizeC'];
};

export type TFancyXButtonNativeAttrs = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'style'>;

export type TFancyXButtonWithHTMLAttrs = TFancyXButton & TFancyXButtonNativeAttrs;
