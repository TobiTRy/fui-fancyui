import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';
import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

export type TFancyDropDownUL = {
  children: React.ReactNode;
  width?: string;
  isOpen?: boolean;
  alignHorizontal?: 'left' | 'center' | 'right';
  alignVertical?: 'top' | 'center' | 'bottom';
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
  borderRadius?: TBorderRadiusSizes;
};

export type TFancyDropDownULWithHTMLAttrs = TFancyDropDownUL & React.HTMLAttributes<HTMLDivElement>;
