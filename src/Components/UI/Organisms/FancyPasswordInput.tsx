import React from 'react'
import InputCreator, { IInputCreatorHandler, IInputCreatorActiveHandler } from './InputCreator/InputCreator';
import PasswortInput from '../Molecules/PasswortInput/PasswortInput';


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
export default function FancyPasswordInput(props: FancyTextInputProps) {
  return <InputCreator {...props} InputComponent={PasswortInput} />;
}