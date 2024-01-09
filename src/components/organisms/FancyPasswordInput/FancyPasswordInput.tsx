import { useId, useState } from 'react';

import PasswordInput from '@/components/atoms/PasswordInput/PasswordInput';

import InputWrapper from '@/components/molecules/InputWrapper/InputWrapper';
import { TInputWrapperUserInputProps } from '@/components/molecules/InputWrapper/TInputWrapper.model';
import { TPasswordInputPropsWithNativeAttrs } from '@/components/atoms/PasswordInput/TPasswordInput.model';

type IFancyTextInputProps = Exclude<TPasswordInputPropsWithNativeAttrs, 'themeType'> &
  Exclude<TInputWrapperUserInputProps, 'InputElement'>;
// --------------------------------------------------------------------------- //
// ----The PasswordInput Comonent with surrounding icon, label and underline-- //
// --------------------------------------------------------------------------- //
export default function FancyPasswordInput(props: IFancyTextInputProps) {
  const {
    id,
    value,
    placeholder,
    systemMessage,
    disabled,
    align,
    themeType,
    layer,
    icon,
    label,
    onFocus,
    onBlur,
    ...inputProps
  } = props;

  //the states activity of the input
  const [isActive, setIsActive] = useState(false);

  // if no id is provided, generate a random one
  const useid = useId();
  const usedId = id ? id : useid;

  return (
    <InputWrapper
      id={usedId}
      themeType={themeType}
      layer={layer}
      hasValue={!!value}
      placeholder={placeholder}
      label={label}
      disabled={disabled}
      align={align}
      isActive={isActive}
      icon={icon}
      systemMessage={systemMessage}
      InputElement={
        <PasswordInput
          id={usedId}
          value={value}
          align={align}
          themeType={themeType}
          layer={layer}
          disabled={disabled}
          onFocus={(e) => {
            onFocus && onFocus(e);
            setIsActive(true);
          }}
          onBlur={(e) => {
            onBlur && onBlur(e);
            setIsActive(false);
          }}
          placeholder={placeholder}
          {...inputProps}
        />
      }
    />
  );
}
