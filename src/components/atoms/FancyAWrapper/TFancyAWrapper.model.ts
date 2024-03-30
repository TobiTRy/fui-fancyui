import { CSSProp } from 'styled-components';
import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

export type TFancyAWrapper = {
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
  isActive?: boolean;
  isHoverable?: boolean;
  externalStyle?: CSSProp;
};

export type TFancyAWrapperWithHTMLAttrs = React.HTMLAttributes<HTMLDivElement> & TFancyAWrapper;
