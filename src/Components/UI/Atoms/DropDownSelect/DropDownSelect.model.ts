import { ChangeEvent } from "react";

export default interface IDropDownSelect {
  id?: string;
  align?: 'left' | 'center';
  selected?: string;
  values?: string[] ;
  disabled?: boolean;
  handler?: (e: ChangeEvent<HTMLSelectElement>) => void;
  activeHandler?: (value: boolean) => void;
};