import { TFancyTextInput } from '@/components/organisms/FancyTextInput/TFancyTextInput.model';

export type TSearchSelectItem = {
  id: string | number;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  image?: string;
  data?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
};

export type TFancySearchSelect = TFancyTextInput & {
  /** Array of items to search and select from */
  items: TSearchSelectItem[];
  /** Callback when an item is selected */
  onSelect?: (item: TSearchSelectItem) => void;
  /** Custom filter function. If not provided, will filter by title and description */
  filterFunction?: (items: TSearchSelectItem[], searchValue: string) => TSearchSelectItem[];
  /** Placeholder text when no items are found */
  noItemsText?: string;
  /** Maximum height of the dropdown */
  maxHeight?: string;
  /** Whether to show dropdown when input is focused (even without search value) */
  openOnFocus?: boolean;
  /** Selected item value */
  selectedItem?: TSearchSelectItem;
  /** Whether to clear search on selection */
  clearOnSelect?: boolean;
  /** Layout mode for item content: 'normal' = 2x2 grid, 'span' = icon spans both rows, 'row' = horizontal */
  itemLayoutMode?: 'normal' | 'span' | 'row';
};

export type TFancySearchSelectWithHTMLProps = TFancySearchSelect & React.HTMLAttributes<HTMLDivElement>;
