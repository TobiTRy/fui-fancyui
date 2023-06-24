import React, { useId, useState } from 'react';

import PasswortInput from '../../Molecules/PasswortInput/PasswortInput';
import TextInput from '../../Molecules/TextInput/TextInput';
import NumberInput from '../../Molecules/NumberInput/NumberInput';
import InputWrapper from '../../Atoms/InputWrapper/InputWrapper';

export type IInputCreatorHandler = (value?: string, e?: React.ChangeEvent<HTMLInputElement>) => void;
export type IInputCreatorActiveHandler = (value: boolean) => void;

interface IInputCreator {
  InputComponent: typeof PasswortInput | typeof TextInput | typeof NumberInput;
  label?: string;
  icon?: JSX.Element;
  value?: string | number;
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

export default function InputCreator(props: IInputCreator) {
  const { InputComponent, label, value, handler, activeHandler, disabled, errorMessage, align, icon, underline, autoWidth } = props;
  const [isActive, setIsActive] = useState(false);

  const id = useId();

  const activeFocusHandler = (value: boolean) => {
    setIsActive(value);
    activeHandler && activeHandler(value);
  };

  const inputValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    handler && handler(e.target.value, e);
  };

  return (
    <InputWrapper
      id={id}
      icon={icon}
      disabled={disabled}
      align={align}
      isActiv={isActive}
      label={label}
      errorMessage={errorMessage}
      underline={underline}
      autoWidth={autoWidth}
    >
      <InputComponent
        id={id}
        align={align}
        value={value}
        handler={inputValueHandler}
        activeHandler={activeFocusHandler}
        disabled={disabled}
        errorMessage={errorMessage}
        autoWidth={autoWidth}
      />
    </InputWrapper>
  );
}
