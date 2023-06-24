import React from 'react';
import styled from 'styled-components';

import RawInput, { IRawInput } from '../../Atoms/RawInput';
import { UnderLineFocusStyle } from '../../Atoms/InputUnderline';
import { AnimatedInputLabel, AnimatedLabelFocusStyle } from '../../Atoms/AnimatedLabel';

export interface ITextInput extends IRawInput {
  id?: string;
  disabled?: boolean;
  value?: string | number;
  errorMessage?: string;
  handler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  activeHandler?: (value: boolean) => void;
};

const StyledTextInput = styled(RawInput)<ITextInput>`
  ${({ align, errorMessage }) => AnimatedLabelFocusStyle(align, errorMessage)}
  //the focus animation for the underline
  ${({ align }) => UnderLineFocusStyle(AnimatedInputLabel, align)}
`;

export default function TextInput(props: ITextInput) {
  const { value, handler, activeHandler, disabled, errorMessage, align, id } = props;

  //this function is used to toggle the active state of the input
  const focusHandler = (value: boolean) => {
    activeHandler && activeHandler(value);
  };

  return (
    <StyledTextInput
      id={id}
      type="text"
      placeholder=""
      errorMessage={errorMessage}
      value={value}
      align={align}
      autoComplete={'off'}
      onChange={handler}
      disabled={disabled}
      required
      onFocus={() => focusHandler(true)}
      onBlur={() => focusHandler(false)}
    />
  );
}
