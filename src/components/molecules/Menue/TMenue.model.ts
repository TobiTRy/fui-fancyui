import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { CSSProp } from 'styled-components';

export type TMenue = {
  children?: React.ReactNode;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
  outlined?: boolean;
  outlinedBackgroundStrength?: number;
  externalStyle?: CSSProp;
};

export type TMenueWithHTMLAttributes = TMenue & React.HTMLAttributes<HTMLDivElement>;
