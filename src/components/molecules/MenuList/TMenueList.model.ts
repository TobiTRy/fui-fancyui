import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { CSSProp } from 'styled-components';

export type TMenuList = {
  children?: React.ReactNode;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
  outlined?: boolean;
  outlinedBackgroundStrength?: number;
  externalStyle?: CSSProp;
};

export type TMenuListWithHTMLAttributes = TMenuList & React.HTMLAttributes<HTMLDivElement>;
