import React from 'react'
import InputCreator, { IInputCreatorHandler, IInputCreatorActiveHandler } from './InputCreator/InputCreator';
import TextInput from '../Molecules/TextInput/TextInput';


interface FancyTextInputProps {
  value?: string | number;
  errorMessage?: string;
  disabled?: boolean;
  align?: 'left' | 'center';
  handler?: IInputCreatorHandler;
  activeHandler?: IInputCreatorActiveHandler;
  icon?: JSX.Element;
  label?: string;
};
// --------------------------------------------------------------------------- //
// ----The TextInput Comonent with surrounding icon, label and underline ----- //
// --------------------------------------------------------------------------- //
export default function FancyTextInput(props: FancyTextInputProps) {
  return <InputCreator {...props} InputComponent={TextInput} />;
}