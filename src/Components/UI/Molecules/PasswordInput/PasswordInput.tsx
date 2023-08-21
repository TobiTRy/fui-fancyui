import React, { InputHTMLAttributes, useState } from 'react';
import { styled } from 'styled-components';

import RawInput, { TRawInputAlign } from '../../Atoms/RawInput/RawInput';
import PasswordEye from '../../Atoms/PasswordEye/PasswordEye';

import { colorPalet } from '../../Design/design';

const WrapperEye = styled.div`
  position: absolute;
  bottom: 6px;
  right: 4px;

  svg {
    color: ${colorPalet.white_dark};
  }
`;

export interface IPasswordInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  value?: string;

  align?: TRawInputAlign;
  activeHandler?: (value: boolean) => void;
}
// --------------------------------------------------------------------------- //
// --------------- The passwordInputcomponent for only the input ------------- //
// --------------------------------------------------------------------------- //
export default function PasswordInput(props: IPasswordInputProps) {
  const { value, onChange, activeHandler, align, ...HTMLInputProps } = props;
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
      <RawInput
        type={isShowPassword ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        onFocus={() => activeHandler && activeHandler(true)}
        onBlur={() => activeHandler && activeHandler(false)}
        $align={align}
        {...HTMLInputProps}
      />
    </>
  );
}
