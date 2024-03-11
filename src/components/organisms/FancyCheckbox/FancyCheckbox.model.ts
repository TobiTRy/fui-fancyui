import { TRawCheckbox } from '@/components/atoms/RawCheckbox/TRawCheckbox.model';

// the incoming props custom for the RawCheckbox component
export type TAlign = 'left' | 'right' | 'center';
export type TAlignCheckbox = 'left' | 'right';

export type TFancyCheckboxProps = {
  label?: string;
  align?: TAlign;
  alignCheckbox?: TAlignCheckbox;
  description?: string;
} & TRawCheckbox;
