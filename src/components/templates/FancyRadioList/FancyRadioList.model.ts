import { Fieldset } from '@/components/molecules/Fieldset';
import { TFancyListBox } from '@/components/organisms/FancyListBox';

export interface FancyRadioListItem {
  title: string;
  description?: string;
  itemKey: string;
}

export type FancyRadioListProps = {
  items: FancyRadioListItem[];
  name: string;
  handler?: (itemKey: string) => void;
} & Omit<React.ComponentProps<typeof Fieldset>, 'children'> &
  Omit<TFancyListBox, 'children'>;
