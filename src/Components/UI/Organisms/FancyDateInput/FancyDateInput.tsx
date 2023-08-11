import React, { ChangeEvent, useEffect, useId, useState } from 'react';

import DateInput, { IDateInputProps } from '../../Molecules/DateInput/DateInput';
import InputWrapper, { IInputWrapperUserInputProps } from '../../Molecules/InputWrapper/InputWrapper';

type  IFancyDateInput =  IInputWrapperUserInputProps & IDateInputProps;
// --------------------------------------------------------------------------- //
// ----The TextInput Comonent with surrounding icon, label and underline ----- //
// --------------------------------------------------------------------------- //
export default function FancyDateInput(props: IFancyDateInput) {
  const { id ,value, label, icon, errorMessage, align, name, disabled, handler, activeHandler, ariaLabel } = props;

  //the states for the value and the activity of the input
  const [selectedDate, setSelectedDate] = useState('');
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
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const incomingValue = e.target.value;

    setSelectedDate(incomingValue ? incomingValue : '');
    handler && handler(e);
  };
  // sets the value from the parent if it is passed
  useEffect(() => {
    if (value) {
      setSelectedDate(value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <InputWrapper id={usedId} label={label} disabled={disabled} align={align} isActiv={isActiv} icon={icon} errorMessage={errorMessage}>
      <DateInput
        id={usedId}
        handler={changeHandler}
        activeHandler={activeFocusHandler}
        value={selectedDate}
        disabled={disabled}
        name={name}
        align={align}
        ariaLabel={ariaLabel}
      />
    </InputWrapper>
  );
}
