import React from 'react'
import InputCreator, { IInputCreatorHandler, IInputCreatorActiveHandler } from '../Molecules/InputCreator/InputCreator';
import DateInput from '../Molecules/DateInput/DatePicker';


interface IFancyDateInput {
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
// ----The TextInput Comonent with surrounding icon, label and underline ----- //
// --------------------------------------------------------------------------- //
export default function FancyDateInput(props: IFancyDateInput) {
  return <InputCreator {...props} InputComponent={DateInput} />;
}