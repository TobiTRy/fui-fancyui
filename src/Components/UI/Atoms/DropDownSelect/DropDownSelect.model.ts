import { ChangeEvent } from 'react';

export default interface IDropDownSelect {
  id?: string;
  align?: 'left' | 'center';
  selected?: string;
  name?: string;
  values?: string[];
  value?: string;
  disabled?: boolean;
  emptySelect?: boolean;
  handler?: (e: ChangeEvent<HTMLSelectElement>) => void;
  activeHandler?: (value: boolean) => void;
}
