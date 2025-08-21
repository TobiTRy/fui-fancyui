import { TSwitchWithNativeAttrs } from '@/components/molecules/Switch';
import { TUiColorsMain } from '@/types/TUiColorsMain';
import { TLayer, TTextAlignLR } from '@/types';
import { TThemeArrayOrValueCSS } from '@/design/designFunctions/arrayToCssValues';

export type TFancySwitch = {
  label?: string;
  description?: string;
  alignSwitch?: TTextAlignLR;
  themeTypeBox?: TUiColorsMain;
  layerBox?: TLayer;
  wide?: boolean;
  borderRadius?: TThemeArrayOrValueCSS;
} & TSwitchWithNativeAttrs;

export type TFancySwitchWithHTMLAttrs = TFancySwitch;
