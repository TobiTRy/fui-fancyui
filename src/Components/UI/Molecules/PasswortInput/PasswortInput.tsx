import React, { ChangeEvent, useState } from 'react'

import RawInput, { TRawInputAlign } from '../../Atoms/RawInput';
import styled from 'styled-components';
import { UnderLineFocusStyle } from '../../Atoms/InputUnderline';
import PasswordEye from '../../Atoms/PasswordEye/PasswordEye';
import { AnimatedInputLabel, AnimatedLabelFocusStyle } from '../../Atoms/AnimatedLabel';
import IStyledPrefixAndPicker from '../../Interface/IStyledPrefixAndPicker.model';

interface IPasswortInputProps {
  id?: string;
  disabled?: boolean;
  value?: string;
  errorMessage?: string;
  align?: TRawInputAlign;
  handler?: (e: ChangeEvent<HTMLInputElement>) => void;
  activeHandler?: (value: boolean) => void;
};


type IStyledPasswortInput = IStyledPrefixAndPicker<IPasswortInputProps, 'align' | 'errorMessage'>
const StyledPasswortInput = styled(RawInput)<IStyledPasswortInput>`
  ${({ $align, $errorMessage }) => AnimatedLabelFocusStyle($align, $errorMessage)}
  //the focus animation for the underline
  ${({ $align }) => UnderLineFocusStyle(AnimatedInputLabel, $align)}
`;
export default function PasswortInput(props: IPasswortInputProps) {
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
        value={value}
        autoComplete={'off'}
        onChange={handler}
        disabled={disabled}
        required
        onFocus={() => focusHandler(true)}
        onBlur={() => focusHandler(false)}
        $errorMessage={errorMessage}
        $align={align}
      />
    </>
  )
}
