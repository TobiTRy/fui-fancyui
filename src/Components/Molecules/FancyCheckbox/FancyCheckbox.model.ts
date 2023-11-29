import { IRawCheckboxProps } from '../../Atoms/RawCheckbox/RawCheckbox.model';

// the incoming props custom for the RawCheckbox component
export type TAlign = 'left' | 'right' | 'center';
export type TAlignCheckbox = 'left' | 'right';

export interface IFancyCheckboxProps extends IRawCheckboxProps {
  label?: string;
  align?: TAlign;
  alignCheckbox?: TAlignCheckbox;
  description?: string;
}
