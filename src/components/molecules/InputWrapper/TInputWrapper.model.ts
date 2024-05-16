import { ReactElement } from 'react';

import { TLayer } from '@/types/TLayer';
import { TTextAlignLC } from '@/types/TTextAlignLC';
import { TUiColorsSystemMessage } from '@/types/TUiColorsSystemMessage';
import { TUiColorsMain } from '@/types/TUiColorsMain';
import { TFancyBox } from '@/components/atoms/FancyBox/FancyBox.model';

export type TInputWrapper = {
  id?: string;
  isActive?: boolean;
  label?: string;
  disabled?: boolean;
  InputElement?: ReactElement<HTMLInputElement>;
  systemMessage?: TUiColorsSystemMessage;
  icon?: JSX.Element;
  hasValue?: boolean;
  themeType?: Exclude<TUiColorsMain, 'accent'>;
  layer?: TLayer;
  align?: TTextAlignLC;
  autoWidth?: boolean;
  underline?: boolean;
  placeholder?: string;
  transparentBackground?: boolean;
  labelVariant?: 'static' | 'animated';
  className?: string;
} & Exclude<TFancyBox, 'as' | 'themeType' | 'externalStyle' | 'borderRadius' | 'sizeC'>;

export type TInputWrapperUserInputProps = Omit<
  TInputWrapper,
  'children' | 'id' | 'autoWidth' | 'value' | 'borderRadius' | 'sizeC' | 'isActive' | 'hasValue' | 'as' | 'InputElement'
>;
