import { ReactNode } from 'react';

import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

export type THeaderTitleWithLogo = {
  title?: ReactNode | string;
  logo?: ReactNode;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
};

export type THeaderTitleWithLogoWithHTMLAttributes = THeaderTitleWithLogo & React.HTMLAttributes<HTMLSpanElement>;
