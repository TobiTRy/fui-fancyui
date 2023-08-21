import React from 'react';

import SVGEyeCrossed from '../../SVGIcons/SVGEyeCrossed';
import SVGEyeOpen from '../../SVGIcons/SVGEyeOpen';
import FancySVGAtom from '../FancySVGAtom/FancySVGAtom';

interface IPasswordEye {
  isShow?: boolean;
  handler?: () => void;
}
export default function PasswordEye({ isShow, handler }: IPasswordEye) {
  const clickHandler = () => {
    handler && handler();
  };

  return (
    <i onClick={clickHandler}>
      {!isShow ? (
        // the eye icon for the password type toggle
        <FancySVGAtom size="extraSmall">{SVGEyeOpen}</FancySVGAtom>
      ) : (
        // the crossed out eye icon for the password type toggle
        <FancySVGAtom size="extraSmall">{SVGEyeCrossed}</FancySVGAtom>
      )}
    </i>
  );
}
