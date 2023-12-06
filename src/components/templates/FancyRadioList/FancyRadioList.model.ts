import { FancyListBox } from '@/components/molecules/FancyListBox';
import { Fieldset } from '@/components/molecules/Fieldset';

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
