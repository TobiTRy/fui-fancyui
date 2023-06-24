import React from 'react'
import InputCreator, { IInputCreatorHandler, IInputCreatorActiveHandler } from '../../Organisms/InputCreator/InputCreator';
import PasswortInput from '../../Molecules/PasswortInput/PasswortInput';


interface FancyTextInputProps {
  id?: string;
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