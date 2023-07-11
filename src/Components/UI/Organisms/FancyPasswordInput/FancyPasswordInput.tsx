import React, { ChangeEvent, useEffect, useState } from 'react'
import InputCreator, { IInputCreatorHandler, IInputCreatorActiveHandler } from '../../Molecules/InputCreator/InputCreator';
import PasswortInput from '../../Molecules/PasswortInput/PasswortInput';


interface FancyTextInputProps {
  value?: string;
  errorMessage?: string;
  disabled?: boolean;
  align?: 'left' | 'center';
  handler?: IInputCreatorHandler;
  activeHandler?: IInputCreatorActiveHandler;
  icon?: JSX.Element;
  label?: string;
};
// --------------------------------------------------------------------------- //
// ----The PasswordInput Comonent with surrounding icon, label and underline-- //
// --------------------------------------------------------------------------- //
export default function FancyPasswordInput(props: FancyTextInputProps) {
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

  return <InputCreator {...props} value={value} handler={changeHandler} InputComponent={PasswortInput} />;
}