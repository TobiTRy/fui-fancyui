import { TFancyTextInput } from '@/components/organisms/FancyTextInput/TFancyTextInput.model';

export type TSearchSelectItem<T = string | number> = {
  id: T;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  image?: string;
};

export type TFancySearchSelect<T = string | number> = TFancyTextInput & {
  /** Array of items to search and select from */
  items: TSearchSelectItem<T>[];
  /** Callback when an item is selected */
  onSelect?: (item: TSearchSelectItem<T>) => void;
  /** Custom filter function. If not provided, will filter by title and description */
  filterFunction?: (items: TSearchSelectItem<T>[], searchValue: string) => TSearchSelectItem<T>[];
  /** Placeholder text when no items are found */
  noItemsText?: string;
  /** Maximum height of the dropdown */
  maxHeight?: string;
  /** Whether to show dropdown when input is focused (even without search value) */
  openOnFocus?: boolean;
  /** Selected item value */
  selectedItem?: TSearchSelectItem<T>;
  /** Whether to clear search on selection */
  clearOnSelect?: boolean;
  /** Layout mode for item content: 'normal' = 2x2 grid, 'span' = icon spans both rows, 'row' = horizontal */
  itemLayoutMode?: 'normal' | 'span' | 'row';
};

export type TFancySearchSelectWithHTMLProps<T = string | number> = TFancySearchSelect<T> &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'>;
