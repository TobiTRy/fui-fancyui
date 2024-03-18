import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { TUiColorsSystemMessage } from '@/types/TUiColorsSystemMessage';
import { TThemeArrayOrValueCSS } from '@/design/designFunctions/arrayToCssValues/TArrayValues.model';
import { TComponentSizes } from '@/types/TComponentSizes';
import { TDynamicElementWrapperWithHTMLAttrs } from '@/components/atoms/DynamicElementWrapper/TDynamicElementWrapper.model';

export type TChipList = {
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
  outlined?: boolean;
  children?: React.ReactNode;
  borderRadius?: TThemeArrayOrValueCSS;
  sizeC?: TComponentSizes;
  systemMessage?: TUiColorsSystemMessage;
};

export type TChipListWithHTMLAtrrs = TChipList & TDynamicElementWrapperWithHTMLAttrs;
