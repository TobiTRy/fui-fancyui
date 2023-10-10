import React, { useId, useState } from 'react';

import DateInput, { IDateInputPropsWithNativeAttrs } from '../../Molecules/DateInput/DateInput';
import InputWrapper, { IInputWrapperUserInputProps } from '../../Molecules/InputWrapper/InputWrapper';

type IFancyDateInput = IInputWrapperUserInputProps & IDateInputPropsWithNativeAttrs;
// --------------------------------------------------------------------------- //
// ----The TextInput Comonent with surrounding icon, label and underline ----- //
// --------------------------------------------------------------------------- //
export default function FancyDateInput(props: IFancyDateInput) {
  const { id, value, label, icon, errorMessage, align, disabled, activeHandler, themeType, layer, ...inputProps } = props;

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
      value={value}
      label={label}
      disabled={disabled}
      themeType={themeType}
      layer={layer}
      align={align}
      isActive={isActive}
      icon={icon}
      errorMessage={errorMessage}
      InputElement={
        <DateInput
          id={usedId}
          themeType={themeType}
          layer={layer}
          value={value}
          activeHandler={activeFocusHandler}
          align={align}
          {...inputProps}
        />
      }
    />
  );
}
