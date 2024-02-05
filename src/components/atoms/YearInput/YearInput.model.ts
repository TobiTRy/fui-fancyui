import { TNumberInputWithNativeAttrs } from '@/components/atoms/NumberInput/TNumberInput.moedel';
import { TComponentSizes } from '@/types/TComponentSizes';

export type TYearInput = {
  year?: number;
  sizeC?: TComponentSizes;
};

export type TYearInputWithNativeAttrs = TYearInput & TNumberInputWithNativeAttrs;
