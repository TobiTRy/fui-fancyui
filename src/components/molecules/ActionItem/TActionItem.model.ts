import { TComponentSizes } from '@/types/TComponentSizes';
import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

export type TActionItemSetting = {
  labelAlign?: 'left' | 'right' | 'top' | 'bottom';
  size: TComponentSizes;
  layer?: TLayer;
  themeType?: TUiColorsNotTransparent;
  themeTypeActiveHover?: TUiColorsNotTransparent;
} & React.HTMLAttributes<HTMLDivElement>;

export type TActionItemButton = {
  label?: string;
  icon: string | number | JSX.Element;
  onClick?: () => void;
  isActive?: boolean;
  isClickable?: boolean;
};

export type TActionItem = TActionItemSetting & TActionItemButton;
