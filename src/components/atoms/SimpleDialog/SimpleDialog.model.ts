import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { CSSProp } from 'styled-components';

// Define the props for the SimpleDialog component
export type TSimpleDialog = {
  isOpen?: boolean;
  children?: React.ReactNode;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
  extenalStyle?: CSSProp;
};

export type TSimpleDialogHTMLAttrs = React.HTMLAttributes<HTMLDivElement>;

export type TSimpleDialogWithHTMLAttrs = TSimpleDialog & TSimpleDialogHTMLAttrs;
