import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

import RawInput, { TRawInputAlign } from '../../Atoms/RawInput';
import { UnderLineFocusStyle } from '../../Atoms/InputUnderline';
import { AnimatedInputLabel, AnimatedLabelFocusStyle } from '../../Atoms/AnimatedLabel';
import IStyledPrefixAndPicker from '../../Interface/IStyledPrefixAndPicker.model';

export interface ITextInputProps {
  id?: string;
  disabled?: boolean;
  value?: string | number;
  name?: string;
  errorMessage?: string;
  align?: TRawInputAlign;
  handler?: (e: ChangeEvent<HTMLInputElement>) => void;
  activeHandler?: (value: boolean) => void;
}

type IStyledTextInput = IStyledPrefixAndPicker<ITextInputProps, 'align' | 'errorMessage'>;
const StyledTextInput = styled(RawInput)<IStyledTextInput>`
  ${({ $align, $errorMessage }) => AnimatedLabelFocusStyle($align, $errorMessage)}
  //the focus animation for the underline
  ${({ $align }) => UnderLineFocusStyle(AnimatedInputLabel, $align)}
`;

export default function TextInput(props: ITextInputProps) {
  const { value, handler, name, activeHandler, disabled, errorMessage, align, id } = props;

  //this function is used to toggle the active state of the input
  const focusHandler = (value: boolean) => {
    activeHandler && activeHandler(value);
  };

  return (
    <StyledTextInput
      id={id}
      type="text"
      placeholder=""
      value={value}
      name={name}
      autoComplete={'off'}
      onChange={handler}
      disabled={disabled}
      required
      onFocus={() => focusHandler(true)}
      onBlur={() => focusHandler(false)}
      $align={align}
      $errorMessage={errorMessage}
    />
  );
}
