import { useId, useState } from 'react';

import PasswordInput, { IPasswordInputProps } from '@/components/molecules/PasswordInput/PasswordInput';

import InputWrapper from '@/components/molecules/InputWrapper/InputWrapper';
import { IInputWrapperUserInputProps } from '@/components/molecules/InputWrapper/IInputWrapper.model';

type IFancyTextInputProps = IPasswordInputProps & Omit<IInputWrapperUserInputProps, 'InputElement'>;
// --------------------------------------------------------------------------- //
// ----The PasswordInput Comonent with surrounding icon, label and underline-- //
// --------------------------------------------------------------------------- //
export default function FancyPasswordInput(props: IFancyTextInputProps) {
  const {
    id,
    value,
    placeholder,
    activeHandler,
    errorMessage,
    disabled,
    align,
    themeType,
    layer,
    icon,
    label,
    ...inputProps
  } = props;

  //the states activity of the input
  const [isActive, setIsActive] = useState(false);

  // if no id is provided, generate a random one
  const useid = useId();
  const usedId = id ? id : useid;

  // handles the focus and blur events and calls the handler from the parent
  const activeFocusHandler = (value: boolean) => {
    setIsActive(value);
    activeHandler && activeHandler(value);
  };

  return (
    <InputWrapper
      id={usedId}
      themeType={themeType}
      layer={layer}
      value={value}
      placeholder={placeholder}
      label={label}
      disabled={disabled}
      align={align}
      isActive={isActive}
      icon={icon}
      errorMessage={errorMessage}
      InputElement={
        <PasswordInput
          id={usedId}
          value={value}
          align={align}
          themeType={themeType}
          layer={layer}
          disabled={disabled}
          activeHandler={activeFocusHandler}
          placeholder={placeholder}
          {...inputProps}
        />
      }
    />
  );
}
