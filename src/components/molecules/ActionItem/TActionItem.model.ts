import { TFancyFlexBoxWithDynamicElAttrs } from '@/components/templates/FancyFlexBox';
import { TGenerateThemeDesignForComponentProps } from '@/design/designFunctions/generateThemeDesignForComponent';
import { TComponentSizesMid } from '@/types/TComponentSizes';
import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

export type TActionItemSetting = {
  labelAlign?: 'left' | 'right' | 'top' | 'bottom';
  hideLabel?: boolean;
  size?: TComponentSizesMid;
  layer?: TLayer;
  themeType?: TUiColorsNotTransparent;
  themeTypeActiveHover?: TUiColorsNotTransparent;
};

export type TActionItemButton = {
  label: string;
  icon: string | number | JSX.Element;
  onClick?: () => void;
  isActive?: boolean;
  isClickable?: boolean;
  disabled?: boolean;
};

export type TActionItem = TActionItemSetting & TActionItemButton & TGenerateThemeDesignForComponentProps;

export type TActionItemWithHTMLProps = TActionItem & TFancyFlexBoxWithDynamicElAttrs;
