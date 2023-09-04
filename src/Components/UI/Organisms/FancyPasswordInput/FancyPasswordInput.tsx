import React, { useId, useState } from 'react';
import PasswordInput, { IPasswordInputProps } from '../../Molecules/PasswordInput/PasswordInput';

import InputWrapper, { IInputWrapperUserInputProps } from '../../Molecules/InputWrapper/InputWrapper';
type IFancyTextInputProps = IPasswordInputProps & IInputWrapperUserInputProps;

// --------------------------------------------------------------------------- //
// ----The PasswordInput Comonent with surrounding icon, label and underline-- //
// --------------------------------------------------------------------------- //
export default function FancyPasswordInput(props: IFancyTextInputProps) {
  const { id, value, placeholder, activeHandler, errorMessage, disabled, align, icon, label, ...inputProps } = props;

  //the states activity of the input
  const [isActiv, setIsActive] = useState(false);

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
      value={value}
      placeholder={placeholder}
      label={label}
      disabled={disabled}
      align={align}
      isActiv={isActiv}
      icon={icon}
      errorMessage={errorMessage}
      InputElement={
        <PasswordInput
          id={usedId}
          value={value}
          align={align}
          disabled={disabled}
          activeHandler={activeFocusHandler}
          placeholder={placeholder}
          {...inputProps}
        />
      }
    />
  );
}
