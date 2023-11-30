import { FancyListBox } from '@/Components/molecules/FancyListBox';
import { Fieldset } from '@/Components/molecules/Fieldset';

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
  Omit<React.ComponentProps<typeof FancyListBox>, 'children'>;
