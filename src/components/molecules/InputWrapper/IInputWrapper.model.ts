import { TLayer } from '@/types/TLayer';
import { TTextAlignLC } from '@/types/TTextAlignLC';
import { TThemeTypes } from '@/types/TThemeTypes';
import { TUiColorsSystemMessage } from '@/types/TUiColorsSystemMessage';

// Define the props for the InputWrapper component

type TSystemMessage = {
  message: string;
  type: TUiColorsSystemMessage;
};

export interface IInputWrapper {
  id: string;
  isActive?: boolean;
  label?: string;
  disabled?: boolean;
  InputElement?: React.ReactNode;
  systemMessage?: TSystemMessage;
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
