import { ReactElement } from 'react';

import { TLayer } from '@/types/TLayer';
import { TTextAlignLC } from '@/types/TTextAlignLC';
import { TUiColorsSystemMessage } from '@/types/TUiColorsSystemMessage';
import { TUiColorsMain } from '@/types/TUiColorsMain';

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
  InputElement?: ReactElement<HTMLInputElement>;
  systemMessage?: TSystemMessage;
  icon?: JSX.Element;
  value?: string | number | readonly string[] | undefined;
  themeType?: Exclude<TUiColorsMain, 'accent'>;
  layer?: TLayer;
  align?: TTextAlignLC;
  autoWidth?: boolean;
  underline?: boolean;
  placeholder?: string;
}

export type IInputWrapperUserInputProps = Omit<IInputWrapper, 'children' | 'id' | 'underline' | 'autoWidth' | 'value'>;
