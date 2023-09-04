import React, { useId, useState } from 'react';

import InputWrapper from '../../Molecules/InputWrapper/InputWrapper';
import DropDownSelect, { IDropDownSelect } from '../../Atoms/DropDownSelect/DropDownSelect';

import { IInputWrapperUserInputProps } from '../../Molecules/InputWrapper/InputWrapper';

export type IFancyDropDownSelect = IInputWrapperUserInputProps & IDropDownSelect;

// --------------------------------------------------------------------------- //
// ----The Dropdown Comonent with surrounding icon, label and underline ------ //
// --------------------------------------------------------------------------- //
export default function FancyDropDownSelect(props: IFancyDropDownSelect) {
  const { id, value, placeholder, disabled, align, activeHandler, icon, label, errorMessage, ...inputProps } = props;

  //the states for the value and the activity of the input
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
      placeholder={placeholder}
      value={value}
      label={label}
      disabled={disabled}
      align={align}
      isActiv={isActiv}
      icon={icon}
      errorMessage={errorMessage}
      InputElement={
        <DropDownSelect
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
