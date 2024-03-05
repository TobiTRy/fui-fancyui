import { CSSProp } from 'styled-components';
import { FancyBox } from '@/components/atoms/FancyBox';
import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

export type TBottomBar = {
  isVisible?: boolean;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
  externalStyle?: CSSProp;
  children?: React.ReactNode;
};

export type TBottomBarWithFancyBoxAttrs = TBottomBar & React.ComponentProps<typeof FancyBox>;
