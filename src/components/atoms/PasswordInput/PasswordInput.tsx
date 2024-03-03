import { useEffect, useState } from 'react';

import { PasswordEye } from '@/components/atoms/PasswordEye';
import { Wrapper, WrapperEye } from '@/components/atoms/PasswordInput/PasswordInput.style';
import { RawInput } from '@/components/atoms/RawInput';

import { TNativePassowrdInputAttrs, TPasswordInputProps } from '@/components/atoms/PasswordInput/TPasswordInput.model';

// --------------------------------------------------------------------------- //
// --------------- The passwordInputcomponent for only the input ------------- //
// --------------------------------------------------------------------------- //
export default function PasswordInput(props: TPasswordInputProps & TNativePassowrdInputAttrs) {
  const { align, themeType, layer, customEyeOpen, customEyeCrossed, showPassword, ...HTMLInputProps } = props;
  // the state for the password visibility icon to show the password
  const [isShowPassword, setIsShowPassword] = useState(false);

  useEffect(() => {
    setIsShowPassword(showPassword ?? false);
  }, [showPassword]);

  return (
    <Wrapper>
      <WrapperEye $themeType={themeType} $layer={layer}>
        <PasswordEye
          customEyeOpen={customEyeOpen}
          customEyeCrossed={customEyeCrossed}
          isShow={isShowPassword}
          onClick={() => setIsShowPassword(!isShowPassword)}
        />
      </WrapperEye>
      <RawInput type={isShowPassword ? 'text' : 'password'} $align={align} {...HTMLInputProps} />
    </Wrapper>
  );
}
