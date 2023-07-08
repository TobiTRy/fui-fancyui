import { ChangeEvent } from "react";

export default interface IFancyInput {
  label?: string;
  required?: boolean;
  align?: 'left' | 'center';
  textColor?: 'bright' | 'dark';
  type?: 'number' | 'email' | 'text' | 'password' | 'date';
  calculatedType?: 'number' | 'email' | 'text' | 'password' | 'date';
  min?: number | string;
  max?: number | string;
  step?: number | string;
  value?: string | number;
  defaultValue?: string | number;
  name?: string;
  disabled?: boolean;
  icon?: JSX.Element;
  errorMessage?: string;
  handler?: (e?: ChangeEvent<HTMLInputElement>) => void;
}
