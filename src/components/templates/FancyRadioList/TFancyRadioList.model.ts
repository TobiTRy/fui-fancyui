import { TFieldsetWithHTMLAttributes } from '@/components/molecules/Fieldset';
import { TFancyListBox } from '@/components/organisms/FancyListBox';

export interface TFancyRadioListItem {
  title: string;
  description?: string;
  itemKey: string;
}

export type TFancyRadioList = {
  items: TFancyRadioListItem[];
  name: string;
  handler?: (itemKey: string) => void;
} & Omit<TFieldsetWithHTMLAttributes, 'children'> &
  Omit<TFancyListBox, 'children'>;
