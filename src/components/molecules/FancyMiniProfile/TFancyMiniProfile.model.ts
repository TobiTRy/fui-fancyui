import { TComponentSizes } from '@/types/TComponentSizes';
import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

export type TFancyMiniprofile = {
  title?: string;
  subTitle?: string;
  src?: string;
  sizeC?: TComponentSizes;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
  shadow?: boolean;
  alignImage?: 'left' | 'right';
};

export type TFancyMiniprofileWithHTMLProps = TFancyMiniprofile & React.HTMLProps<HTMLDivElement>;
