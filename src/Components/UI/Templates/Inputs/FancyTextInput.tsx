import React from 'react'
import InputCreator, { IInputCreatorHandler, IInputCreatorActiveHandler } from '../../Organisms/InputCreator/InputCreator';
import TextInput from '../../Molecules/TextInput/TextInput';


interface FancyTextInputProps {
  id?: string;
  value?: string | number;
  errorMessage?: string;
  disabled?: boolean;
  align?: 'left' | 'center';
  handler?: IInputCreatorHandler;
  activeHandler?: IInputCreatorActiveHandler;
  icon?: JSX.Element;
  label?: string;
};
export default function FancyTextInput(props: FancyTextInputProps) {
  return <InputCreator {...props} InputComponent={TextInput} />;
}