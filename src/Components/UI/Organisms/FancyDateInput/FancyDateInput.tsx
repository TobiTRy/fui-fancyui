import React, { ChangeEvent, useEffect, useState } from 'react';
import InputCreator, { IInputCreatorHandler, IInputCreatorActiveHandler } from '../../Molecules/InputCreator/InputCreator';
import DateInput from '../../Molecules/DateInput/DatePicker';

interface IFancyDateInput {
  value?: string;
  errorMessage?: string;
  disabled?: boolean;
  name: string;
  align?: 'left' | 'center';
  handler?: IInputCreatorHandler;
  activeHandler?: IInputCreatorActiveHandler;
  icon?: JSX.Element;
  label?: string;
}
// --------------------------------------------------------------------------- //
// ----The TextInput Comonent with surrounding icon, label and underline ----- //
// --------------------------------------------------------------------------- //
export default function FancyDateInput(props: IFancyDateInput) {
  const [value, setValue] = useState('');

  // handles the input value change and calls the handler from the parent
  const changeHandler: IInputCreatorHandler = (value?: string, e?: ChangeEvent<HTMLInputElement>) => {
    setValue(value ? value : '');
    props.handler && props.handler(value, e);
  };

  // sets the value from the parent if it is passed
  useEffect(() => {
    if (props.value) {
      setValue(props.value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <InputCreator {...props} value={value} handler={changeHandler} InputComponent={DateInput} />;
}
