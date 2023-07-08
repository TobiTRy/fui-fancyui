import React from 'react'
import styled from 'styled-components';
import { colorPalet } from '../../Design/design';
import SVGEyeCrossed from '../../SVGIcons/SVGEyeCrossed';
import SVGEyeOpen from '../../SVGIcons/SVGEyeOpen';

export const PasswordIcon = styled.i`
  position: absolute;
  bottom: 4px;
  right: 4px;

  svg {
    color: ${colorPalet.white_dark};
  }
`;

interface IPasswordEye {
  isShow?: boolean;
  handler?: () => void;
};
export default function PasswordEye({isShow, handler}:IPasswordEye) {

  const clickHandler = () => {
    handler && handler();
  };  

  return (
    <PasswordIcon onClick={clickHandler}>
    {!isShow
      ? // the eye icon for the password type toggle
        SVGEyeOpen
      : // the crossed out eye icon for the password type toggle
        SVGEyeCrossed}
  </PasswordIcon>
  )
}
