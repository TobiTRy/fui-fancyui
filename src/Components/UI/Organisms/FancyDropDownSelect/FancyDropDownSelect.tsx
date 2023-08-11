import React, { useId, useState } from 'react';

import InputWrapper from '../../Molecules/InputWrapper/InputWrapper';
import DropDownSelect, { IDropDownSelect } from '../../Atoms/DropDownSelect/DropDownSelect';

import { IInputWrapperUserInputProps } from '../../Molecules/InputWrapper/InputWrapper';

export type IFancyDropDownSelect = IInputWrapperUserInputProps & IDropDownSelect;

// --------------------------------------------------------------------------- //
// ----The Dropdown Comonent with surrounding icon, label and underline ------ //
// --------------------------------------------------------------------------- //
export default function FancyDropDownSelect(props: IFancyDropDownSelect) {
  const { id, disabled,  align, handler, activeHandler,  icon, label, errorMessage, ...inputProps } = props;

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
    <InputWrapper id={usedId} label={label} disabled={disabled} align={align} isActiv={isActiv} icon={icon} errorMessage={errorMessage}>
      <DropDownSelect
        id={usedId}
        handler={handler}
        activeHandler={activeFocusHandler}
        disabled={disabled}
        align={align}
        {...inputProps}
      />
    </InputWrapper>
  );
}
