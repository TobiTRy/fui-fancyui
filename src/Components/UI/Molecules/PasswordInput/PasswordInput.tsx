import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

import RawInput, { TRawInputAlign } from '../../Atoms/RawInput/RawInput';
import { UnderLineFocusStyle } from '../../Atoms/InputUnderline/InputUnderline';
import PasswordEye from '../../Atoms/PasswordEye/PasswordEye';
import { AnimatedInputLabel, AnimatedLabelFocusStyle } from '../../Atoms/AnimatedLabel/AnimatedLabel.style';
import IStyledPrefixAndPicker from '../../Interface/IStyledPrefixAndPicker.model';
import { colorPalet } from '../../Design/design';

const WrapperEye = styled.div`
  position: absolute;
  bottom: 6px;
  right: 4px;

  svg {
    color: ${colorPalet.white_dark};
  }
`;

type IStyledPasswordInput = IStyledPrefixAndPicker<IPasswordInputProps, 'align' | 'errorMessage'>;
const StyledPasswordInput = styled(RawInput)<IStyledPasswordInput>`
  ${({ $align, $errorMessage }) => AnimatedLabelFocusStyle($align, $errorMessage)}
  //the focus animation for the underline
  ${({ $align }) => UnderLineFocusStyle(AnimatedInputLabel, $align)}
`;

export interface IPasswordInputProps {
  id?: string;
  disabled?: boolean;
  name?: string;
  value?: string;
  errorMessage?: string;
  align?: TRawInputAlign;
  ariaLabel?: string;
  handler?: (e: ChangeEvent<HTMLInputElement>) => void;
  activeHandler?: (value: boolean) => void;
}
// --------------------------------------------------------------------------- //
// --------------- The passwordInputcomponent for only the input ------------- //
// --------------------------------------------------------------------------- //
export default function PasswordInput(props: IPasswordInputProps) {
  const { value, handler, activeHandler, disabled, errorMessage, name, align, id, ariaLabel } = props;
  const [isShowPassword, setIsShowPassword] = useState(false);

  // this handler is for the eye icon to show the password
  const showPasswordHandler = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <>
      <WrapperEye>
        <PasswordEye isShow={isShowPassword} handler={showPasswordHandler} />
      </WrapperEye>
      <StyledPasswordInput
        id={id}
        type={isShowPassword ? 'text' : 'password'}
        name={name}
        placeholder=""
        value={value}
        autoComplete={'off'}
        onChange={handler}
        disabled={disabled}
        required
        onFocus={() => activeHandler && activeHandler(true)}
        onBlur={() => activeHandler && activeHandler(false)}
        $errorMessage={errorMessage}
        $align={align}
        aria-label={ariaLabel}
      />
    </>
  );
}
