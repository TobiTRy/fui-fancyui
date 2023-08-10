import React, { ChangeEvent, useEffect, useState } from 'react';
import InputCreator, { IInputCreatorHandler, IInputCreatorActiveHandler } from '../../Molecules/InputCreator/InputCreator';
import TextInput from '../../Molecules/TextInput/TextInput';

export interface FancyTextInputProps {
  value?: string;
  name?: string;
  errorMessage?: string;
  disabled?: boolean;
  align?: 'left' | 'center';
  handler?: IInputCreatorHandler;
  ariaLabel?: string;
  activeHandler?: IInputCreatorActiveHandler;
  icon?: JSX.Element;
  label?: string;
}
// --------------------------------------------------------------------------- //
// ----The TextInput Comonent with surrounding icon, label and underline ----- //
// --------------------------------------------------------------------------- //
export default function FancyTextInput(props: FancyTextInputProps) {
  const [value, setValue] = useState('');

  // handles the input value change and calls the handler from the parent
  const changeHandler: IInputCreatorHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    setValue(inputValue ? inputValue : '');
    props.handler && props.handler(e);
  };

  // sets the value from the parent if it is passed
  useEffect(() => {
    if (props.value) {
      setValue(props.value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <InputCreator {...props} value={value} handler={changeHandler} InputComponent={TextInput} />;
}
