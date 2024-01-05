import { InputHTMLAttributes, useState } from 'react';
import { styled } from 'styled-components';

import { TThemeTypes } from '@/types/TThemeTypes';
import { TLayer } from '@/types/TLayer';
import { TTheme } from '@/types/TTheme';
import { TTextAlignLC } from '@/types/TTextAlignLC';

import { RawInput } from '@/components/atoms/RawInput';
import { PasswordEye } from '@/components/atoms/PasswordEye';
import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent';

export interface IPasswordInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  value?: string;
  align?: TTextAlignLC;
  activeHandler?: (value: boolean) => void;
  themeType?: TThemeTypes;
  layer?: TLayer;
  customEyeOpen?: React.ReactNode;
  customEyeCrossed?: React.ReactNode;
}
// --------------------------------------------------------------------------- //
// --------------- The passwordInputcomponent for only the input ------------- //
// --------------------------------------------------------------------------- //
export default function PasswordInput(props: IPasswordInputProps) {
  const {
    value,
    onChange,
    activeHandler,
    align,
    themeType,
    layer,
    customEyeOpen,
    customEyeCrossed,
    ...HTMLInputProps
  } = props;

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
      <RawInput
        type={isShowPassword ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        onFocus={() => activeHandler && activeHandler(true)}
        onBlur={() => activeHandler && activeHandler(false)}
        $align={align}
        $externalStyle={{ paddingRight: '24px !important' }}
        {...HTMLInputProps}
      />
    </>
  );
}

// --------------------------------------------------------------------------- //
// --------------------- The style for the component ------------------------- //
// --------------------------------------------------------------------------- //
const WrapperEye = styled.div<{ theme: TTheme; $themeType?: TThemeTypes; $layer?: TLayer }>`
  position: absolute;
  bottom: 8px;
  right: 4px;

  svg {
    color: ${({ theme, $themeType = 'secondary', $layer = 4 }) => getBackgroundColor({ theme, $themeType, $layer })};
  }
`;
