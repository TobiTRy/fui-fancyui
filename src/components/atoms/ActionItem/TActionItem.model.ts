import { TComponentSizes } from '@/types/TComponentSizes';
import { TUiColorsMain } from '@/types/TUiColorsMain';
import { TLayer } from '@/types/TLayer';

export type TActionItemSetting = {
  labelAlign?: 'left' | 'right' | 'top' | 'bottom';
  size: TComponentSizes;
  themeType?: TUiColorsMain;
  layer?: TLayer;
};

export type TActionItemButton = {
  label?: string;
  icon: string | number | JSX.Element;
  onClick?: () => void;
  isActive?: boolean;
  isClickable?: boolean;
};

export type TActionItem = TActionItemSetting & TActionItemButton;
