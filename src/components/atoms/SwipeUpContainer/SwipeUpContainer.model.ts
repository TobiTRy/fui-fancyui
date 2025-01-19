import { HTMLAttributes } from 'react';
import { CSSProp } from 'styled-components';

import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

export type TSwipeUpContainer = {
  children: React.ReactNode;
  isScalable?: boolean;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
  isOpen?: boolean;
  externalStyle?: CSSProp;
};

export type TSwipeUpContainerWithHTMLAttrs = TSwipeUpContainer & HTMLAttributes<HTMLDivElement>;
