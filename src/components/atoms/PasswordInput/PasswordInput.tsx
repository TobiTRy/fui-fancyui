import { useState } from 'react';
import { styled } from 'styled-components';

import { TLayer } from '@/types/TLayer';
import { TTheme } from '@/types/TTheme';

import { PasswordEye } from '@/components/atoms/PasswordEye';
import { TNativePassowrdInputAttrs, TPasswordInputProps } from '@/components/atoms/PasswordInput/TPasswordInput.model';
import { RawInput } from '@/components/atoms/RawInput';
import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

// --------------------------------------------------------------------------- //
// --------------- The passwordInputcomponent for only the input ------------- //
// --------------------------------------------------------------------------- //
export default function PasswordInput(props: TPasswordInputProps & TNativePassowrdInputAttrs) {
  const { align, themeType, layer, customEyeOpen, customEyeCrossed, ...HTMLInputProps } = props;

  // the state for the password visibility icon to show the password
  const [isShowPassword, setIsShowPassword] = useState(false);

  // this handler is for the eye icon to show the password
  const showPasswordHandler = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <>
      <WrapperEye $themeType={themeType} $layer={layer}>
        <PasswordEye
          customEyeOpen={customEyeOpen}
          customEyeCrossed={customEyeCrossed}
          isShow={isShowPassword}
          onClick={showPasswordHandler}
        />
      </WrapperEye>
      <RawInput type={isShowPassword ? 'text' : 'password'} $align={align} {...HTMLInputProps} />
    </>
  );
}

// --------------------------------------------------------------------------- //
// --------------------- The style for the component ------------------------- //
// --------------------------------------------------------------------------- //
const WrapperEye = styled.div<{ theme: TTheme; $themeType?: TUiColorsNotTransparent; $layer?: TLayer }>`
  position: absolute;
  bottom: 0px;
  right: 0;
  padding: 8px 0 8px 8px;
  box-sizing: border-box;

  svg {
    color: ${({ theme, $themeType = 'secondary', $layer = 4 }) => getBackgroundColor({ theme, $themeType, $layer })};
  }
`;
