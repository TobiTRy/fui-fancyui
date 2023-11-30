import React from 'react';

import SVGEyeCrossed from '../../icons/SVGEyeCrossed/SVGEyeCrossed';
import SVGEyeOpen from '../../icons/SVGEyeOpen/SVGEyeOpen';
import FancySVGAtom from '../FancySVGAtom/FancySVGAtom';

interface IPasswordEye {
  isShow?: boolean;
  onClick?: () => void;
}
export default function PasswordEye({ isShow, onClick }: IPasswordEye) {
  const clickHandler = () => {
    onClick && onClick();
  };

  return (
    <i onClick={clickHandler}>
      {isShow ? (
        // the eye icon for the password type toggle
        <FancySVGAtom size="sm" isPassive={true}>
          {SVGEyeOpen}
        </FancySVGAtom>
      ) : (
        // the crossed out eye icon for the password type toggle
        <FancySVGAtom size="sm" isPassive={true}>
          {SVGEyeCrossed}
        </FancySVGAtom>
      )}
    </i>
  );
}
