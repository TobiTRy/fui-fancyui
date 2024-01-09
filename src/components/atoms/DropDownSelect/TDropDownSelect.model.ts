import { HTMLAttributes } from 'react';

// the incoming props
export type TDropDownSelect = {
  align?: 'left' | 'center';
  values?: string[];
  value?: string;
  disabled?: boolean;
  placeholder?: string;
  emptySelect?: boolean;
  children?: React.ReactNode;
};

// the native props of the input element excluding the type attribute
export type TDropDownSelectNativeAttrs = Omit<HTMLAttributes<HTMLSelectElement>, 'type'>;

// the props of the input element with the native props
export type TDropDownSelectWithNativeAttrs = TDropDownSelect & TDropDownSelectNativeAttrs;
