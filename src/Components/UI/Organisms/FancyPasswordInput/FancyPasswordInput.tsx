import React, { ChangeEvent, useEffect, useState } from 'react';
import InputCreator, { IInputCreatorHandler, IInputCreatorActiveHandler } from '../../Molecules/InputCreator/InputCreator';
import PasswordInput from '../../Molecules/PasswordInput/PasswordInput';

interface FancyTextInputProps {
  value?: string;
  errorMessage?: string;
  name?: string;
  disabled?: boolean;
  align?: 'left' | 'center';
  handler?: IInputCreatorHandler;
  activeHandler?: IInputCreatorActiveHandler;
  icon?: JSX.Element;
  label?: string;
}
// --------------------------------------------------------------------------- //
// ----The PasswordInput Comonent with surrounding icon, label and underline-- //
// --------------------------------------------------------------------------- //
export default function FancyPasswordInput(props: FancyTextInputProps) {
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

  return <InputCreator {...props} value={value} handler={changeHandler} InputComponent={PasswordInput} />;
}
