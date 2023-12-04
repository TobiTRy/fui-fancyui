import { TLayer } from '@/interface/TLayer';
import { TTextAlignLC } from '@/interface/TTextAlignLC';
import { TThemeTypes } from '@/interface/TThemeTypes';

// Define the props for the InputWrapper component
export interface IInputWrapper {
  id: string;
  isActive?: boolean;
  label?: string;
  disabled?: boolean;
  InputElement?: React.ReactNode;
  errorMessage?: string;
  icon?: JSX.Element;
  value?: string | number | readonly string[] | undefined;
  themeType?: TThemeTypes;
  layer?: TLayer;
  align?: TTextAlignLC;
  autoWidth?: boolean;
  underline?: boolean;
  placeholder?: string;
}

export type IInputWrapperUserInputProps = Omit<IInputWrapper, 'children' | 'id' | 'underline' | 'autoWidth' | 'value'>;
