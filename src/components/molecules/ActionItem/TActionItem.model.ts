import { TLayer } from '@/types/TLayer';
import { TComponentSizes } from '@/types/TComponentSizes';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { TDynamicElementWrapperWithHTMLAttrs } from '@/components/atoms/DynamicElementWrapper';

export type TActionItemSetting = {
  labelAlign?: 'left' | 'right' | 'top' | 'bottom';
  size?: TComponentSizes;
  layer?: TLayer;
  themeType?: TUiColorsNotTransparent;
  themeTypeActiveHover?: TUiColorsNotTransparent;
} & TDynamicElementWrapperWithHTMLAttrs;

export type TActionItemButton = {
  label?: string;
  icon: string | number | JSX.Element;
  onClick?: () => void;
  isActive?: boolean;
  isClickable?: boolean;
};

export type TActionItem = TActionItemSetting & TActionItemButton;
