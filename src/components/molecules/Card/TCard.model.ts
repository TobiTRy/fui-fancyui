import { TFancyBox } from '@/components/atoms/FancyBox';
import { TArrayToCssValuesInputProps } from '@/design/designFunctions/arrayToCssValues/TArrayValues.model';
// the raw styling props for the card
export type TCard = {
  shadow?: boolean;
  borderRadius?: TArrayToCssValuesInputProps;
  padding?: TArrayToCssValuesInputProps;
};

export type TCardWithFancyBoxAttrs = TCard & TFancyBox;
