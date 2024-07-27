'use client';

import { SVGEyeCrossed } from '@/components/icons';
import { SVGEyeOpen } from '@/components/icons';
import { FancySVGAtom } from '@/components/atoms/FancySVGAtom';
import { TPasswordEye } from '@/components/atoms/PasswordEye/TPasswordEye.model';

export default function PasswordEye(props: TPasswordEye) {
  const {
    isShow,
    onClick,
    customEyeCrossed,
    customEyeOpen,
    themeType = 'secondary',
    layer,
    externalStyle,
    systemMessage,
    sizeC = 'xxs',
    ...htmlProps
  } = props;

  return (
    <i onClick={onClick} {...htmlProps}>
      {isShow ? (
        // the eye icon for the password type toggle
        <FancySVGAtom
          sizeC={sizeC}
          themeType={themeType}
          layer={layer}
          systemMessage={systemMessage}
          externalStyle={externalStyle}
        >
          {customEyeOpen ?? <SVGEyeOpen />}
        </FancySVGAtom>
      ) : (
        // the crossed out eye icon for the password type toggle
        <FancySVGAtom
          sizeC={sizeC}
          themeType={themeType}
          layer={layer}
          systemMessage={systemMessage}
          isPassive={false}
          externalStyle={externalStyle}
        >
          {customEyeCrossed ?? <SVGEyeCrossed />}
        </FancySVGAtom>
      )}
    </i>
  );
}
