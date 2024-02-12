import { TNumberInputWithNativeAttrs } from '@/components/atoms/NumberInput/TNumberInput.moedel';
import { TComponentSizes } from '@/types/TComponentSizes';
import { TLayer } from '@/types/TLayer';
import { TUiColorsMain } from '@/types/TUiColorsMain';

export type TYearInput = {
  year?: number;
  sizeC?: TComponentSizes;
  themeType?: TUiColorsMain;
  layer?: TLayer;
};

export type TYearInputWithNativeAttrs = TYearInput & TNumberInputWithNativeAttrs;
