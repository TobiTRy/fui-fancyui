import { CSSProp } from 'styled-components';

export type TFancyImage = {
  aspectRatio?: string; // e.g. "16/9"
  darken?: number | boolean;
  externalStyle?: CSSProp;
} & React.ImgHTMLAttributes<HTMLImageElement>;
