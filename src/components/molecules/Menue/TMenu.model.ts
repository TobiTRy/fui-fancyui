import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { CSSProp } from 'styled-components';

export type TMenu = {
  children?: React.ReactNode;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
  outlined?: boolean;
  outlinedBackgroundStrength?: number;
  outlinedRemoveBorder?: boolean;
  externalStyle?: CSSProp;
};

export type TMenuWithHTMLAttributes = TMenu & React.HTMLAttributes<HTMLDivElement>;
