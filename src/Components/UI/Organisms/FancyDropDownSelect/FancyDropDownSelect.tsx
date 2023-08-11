import React, { ChangeEvent, useId, useState } from 'react';

import InputWrapper from '../../Molecules/InputWrapper/InputWrapper';
import DropDownSelect, { IDropDownSelect } from '../../Atoms/DropDownSelect/DropDownSelect';

import { IInputWrapperUserInputProps } from '../../Molecules/InputWrapper/InputWrapper';

type IFancyDropDownSelect = IInputWrapperUserInputProps & IDropDownSelect;

// --------------------------------------------------------------------------- //
// ----The Dropdown Comonent with surrounding icon, label and underline ------ //
// --------------------------------------------------------------------------- //
export default function FancyDropDownSelect(props: IFancyDropDownSelect) {
  const { id, values, disabled, name, align, handler, activeHandler, ariaLabel, icon, label, errorMessage } = props;

  //the states for the value and the activity of the input
  const [selectedValue, setselectedValue] = useState('');
  const [isActiv, setIsActive] = useState(false);

  // if no id is provided, generate a random one
  const useid = useId();
  const usedId = id ? id : useid;
  
  // handles the focus and blur events and calls the handler from the parent
  const activeFocusHandler = (value: boolean) => {
    setIsActive(value);
    activeHandler && activeHandler(value);
  };

    // handles the input value change and calls the handler from the parent
  const changeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const incomingValue = e.target.value;

    setselectedValue(incomingValue ? incomingValue : '');
    handler && handler(e);
  };

  return (
    <InputWrapper id={usedId} label={label} disabled={disabled} align={align} isActiv={isActiv} icon={icon} errorMessage={errorMessage}>
      <DropDownSelect
        id={usedId}
        handler={changeHandler}
        activeHandler={activeFocusHandler}
        selectedValue={selectedValue}
        values={values}
        disabled={disabled}
        name={name}
        align={align}
        ariaLabel={ariaLabel}
      />
    </InputWrapper>
  );
}
