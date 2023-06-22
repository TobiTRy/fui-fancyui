import React, { useState } from 'react'
import styled from 'styled-components';
import { colorPalet } from '../../Design/design';

export const PasswordIcon = styled.i`
  position: absolute;
  bottom: 4px;
  right: 4px;

  svg {
    color: ${colorPalet.white_dark};
  }
`;

interface IPasswordEye {
  showPassword?: boolean;
  handler?: () => void;
}


export default function PasswordEye({showPassword, handler}:IPasswordEye) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);


  const clickHandler = () => {
    setIsPasswordVisible(!isPasswordVisible);
    handler && handler();

  };  


  return (
    <PasswordIcon onClick={clickHandler}>
    {!showPassword
      ? // the eye icon for the password type toggle
        SVGEyeOpen
      : // the crossed out eye icon for the password type toggle
        SVGEyeCrossed}
  </PasswordIcon>
  )
}
