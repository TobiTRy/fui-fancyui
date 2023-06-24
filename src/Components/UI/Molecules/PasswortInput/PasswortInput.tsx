import React, { ChangeEvent, useState } from 'react'

import RawInput, { IRawInput } from '../../Atoms/RawInput';
import styled from 'styled-components';
import { UnderLineFocusStyle } from '../../Atoms/InputUnderline';
import PasswordEye from '../../Atoms/PasswordEye/PasswordEye';
import { AnimatedInputLabel, AnimatedLabelFocusStyle } from '../../Atoms/AnimatedLabel';

interface IPasswortInput extends IRawInput {
  id?: string;
  disabled?: boolean;
  value?: string;
  errorMessage?: string;
  handler?: (e: ChangeEvent<HTMLInputElement>) => void;
  activeHandler?: (value: boolean) => void;
};
const StyledPasswortInput = styled(RawInput)<IPasswortInput>`
  ${({ align, errorMessage }) => AnimatedLabelFocusStyle(align, errorMessage)}
  //the focus animation for the underline
  ${({ align }) => UnderLineFocusStyle(AnimatedInputLabel, align)}
`;
export default function PasswortInput(props: IPasswortInput) {
  const { value, handler, activeHandler, disabled, errorMessage, align, id } = props;
  const [ isShowPassword, setIsShowPassword ] = useState(false)


  const focusHandler = (value: boolean) => {
    activeHandler && activeHandler(value);
  };

  const showPasswordHandler = () => {
    setIsShowPassword(!isShowPassword)
  }; 

  return (
    <>
      <PasswordEye isShow={isShowPassword} handler={showPasswordHandler}/>    
      <StyledPasswortInput
        id={id}
        type={isShowPassword ? 'text' : 'password'}
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
    </>
  )
}
