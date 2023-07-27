import React, { ChangeEvent, useId, useState } from 'react';

import PasswordInput from '../PasswordInput/PasswordInput';
import TextInput from '../../Molecules/TextInput/TextInput';
import NumberInput from '../../Molecules/NumberInput/NumberInput';
import InputWrapper from '../InputWrapper/InputWrapper';
import DropDownSelect from '../../Atoms/DropDownSelect/DropDownSelect';
import DateInput from '../DateInput/DateInput';

type InputOrSelectEvent = ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>;

export type IInputCreatorHandler = (value?: string, e?: ChangeEvent<HTMLInputElement>) => void;
export type IInputCreatorActiveHandler = (value: boolean) => void;

interface IInputCreator {
  InputComponent: typeof PasswordInput | typeof TextInput | typeof NumberInput | typeof DropDownSelect | typeof DateInput;
  label?: string;
  icon?: JSX.Element;
  value?: string;
  values?: string[];
  name?: string;
  errorMessage?: string;
  disabled?: boolean;
  align?: 'left' | 'center';
  handler?: IInputCreatorHandler;
  activeHandler?: IInputCreatorActiveHandler;
  underline?: boolean;
  min?: number;
  max?: number;
  step?: number;
  autoWidth?: boolean;
}
// --------------------------------------------------------------------------- //
// -- The InputCreator is used for each input to get same design stucture ---- //
// --------------------------------------------------------------------------- //
export default function InputCreator(props: IInputCreator) {
  const { InputComponent, label, value, values, name, handler, activeHandler, disabled, errorMessage, align, icon, underline, autoWidth } = props;
  const [isActive, setIsActive] = useState(false);

  // the id is used to link the label and the input
  const id = useId();

  // this function is used for the design to color wehen its active between  surrounding components get deiifernt colors (e.g. Label, Icon)
  const activeFocusHandler = (value: boolean) => {
    setIsActive(value);
    activeHandler && activeHandler(value);
  };

  //sends the value to the parent component
  const inputValueHandler = (e: InputOrSelectEvent) => {
    handler && handler(e.target.value, e as ChangeEvent<HTMLInputElement>);
  };

  return (
    <InputWrapper
      id={id}
      disabled={disabled}
      icon={icon}
      align={align}
      isActiv={isActive}
      label={label}
      errorMessage={errorMessage}
      underline={underline}
      autoWidth={autoWidth}
    >
      <InputComponent
        id={id}
        name={name}
        handler={inputValueHandler}
        disabled={disabled}
        value={value}
        values={values}
        align={align}
        activeHandler={activeFocusHandler}
        errorMessage={errorMessage}
        autoWidth={autoWidth}
      />
    </InputWrapper>
  );
}
