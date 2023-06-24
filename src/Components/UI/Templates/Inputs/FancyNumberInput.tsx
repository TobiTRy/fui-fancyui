import React from 'react'
import InputCreator, { IInputCreatorHandler, IInputCreatorActiveHandler } from '../../Organisms/InputCreator/InputCreator';
import NumberInput from '../../Molecules/NumberInput/NumberInput';


interface IFancyNumberInput {
  id?: string;
  value?: string;
  errorMessage?: string;
  disabled?: boolean;
  align?: 'left' | 'center';
  handler?: IInputCreatorHandler;
  active?: boolean;
  activeHandler?: IInputCreatorActiveHandler;
  autoWidth?: boolean;
  icon?: JSX.Element;
  label?: string;
  minValue?: number;
  maxValue?: number;
};
export default function FancyNumberInput(props: IFancyNumberInput) {
  return <InputCreator {...props} InputComponent={NumberInput} />;
}