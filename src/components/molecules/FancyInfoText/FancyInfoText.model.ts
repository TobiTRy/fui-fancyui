import { TFancyContentHTMLAttrs } from '@/components/molecules/FancyContent';
import { TFancyFlexBox } from '@/components/templates/FancyFlexBox';
import { TComponentSizes } from '@/types/TComponentSizes';
import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

export type TFancyInfoTextProps = {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  sizeC?: TComponentSizes;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
};

export type TFancyInfoTextWithFancyBoxAndFlex = TFancyInfoTextProps & TFancyFlexBox & TFancyContentHTMLAttrs;
