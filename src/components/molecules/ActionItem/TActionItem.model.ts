import { TDynamicElementWrapperWithHTMLAttrs } from '@/components/atoms/DynamicElementWrapper';
import { TComponentSizesExtended } from '@/types/TComponentSizes';
import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

export type TActionItemSetting = {
  labelAlign?: 'left' | 'right' | 'top' | 'bottom';
  size?: TComponentSizesExtended;
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
