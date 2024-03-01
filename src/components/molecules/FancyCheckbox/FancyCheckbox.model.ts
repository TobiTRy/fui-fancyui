import { TRawCheckboxProps } from '@/components/atoms/RawCheckbox/TRawCheckbox.model';

// the incoming props custom for the RawCheckbox component
export type TAlign = 'left' | 'right' | 'center';
export type TAlignCheckbox = 'left' | 'right';

export interface IFancyCheckboxProps extends TRawCheckboxProps {
  label?: string;
  align?: TAlign;
  alignCheckbox?: TAlignCheckbox;
  description?: string;
}
