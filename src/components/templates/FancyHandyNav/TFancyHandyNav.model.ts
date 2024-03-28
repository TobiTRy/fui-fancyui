import { TFancyBottomBarIcon } from '@/components/templates/FancyBottomBarIcon';
import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { CSSProp } from 'styled-components';

export type TFancyHandyNav = {
  items?: TFancyBottomBarIcon[];
  isVisible?: boolean;
  wichIndexIsActive?: string;
  themeType?: TUiColorsNotTransparent;
  themeTypeIcons?: TUiColorsNotTransparent;
  themeTypeSwitchList?: TUiColorsNotTransparent;
  layer?: TLayer;
  outlined?: boolean;
  outlinedBackgroundStrength?: number;
  externalStyle?: CSSProp;
};

export type TFancyHandyNavWithHTMLAttrs = TFancyHandyNav & React.HTMLAttributes<HTMLElement>;
