import { ReactElement } from 'react';

import { TLayer } from '@/types/TLayer';
import { TTextAlignLC } from '@/types/TTextAlignLC';
import { TUiColorsSystemMessage } from '@/types/TUiColorsSystemMessage';
import { TUiColorsMain } from '@/types/TUiColorsMain';
import { IFancyBox } from '@/components/atoms/FancyBox/FancyBox.model';

// Define the props for the InputWrapper component
type TSystemMessage = {
  message?: string;
  type: TUiColorsSystemMessage;
};

export type TInputWrapper = {
  id: string;
  isActive?: boolean;
  label?: string;
  disabled?: boolean;
  InputElement?: ReactElement<HTMLInputElement>;
  systemMessage?: TSystemMessage;
  icon?: JSX.Element;
  hasValue?: boolean;
  themeType?: Exclude<TUiColorsMain, 'accent'>;
  layer?: TLayer;
  align?: TTextAlignLC;
  autoWidth?: boolean;
  underline?: boolean;
  placeholder?: string;
  transparentBackground?: boolean;
} & Exclude<IFancyBox, 'as' | 'themeType' | 'externalStyle'>;

export type TInputWrapperUserInputProps = Omit<TInputWrapper, 'children' | 'id' | 'underline' | 'autoWidth' | 'value'>;
