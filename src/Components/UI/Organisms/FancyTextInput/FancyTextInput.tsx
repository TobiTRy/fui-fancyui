import React, { useId, useState } from 'react';

import TextInput from '../../Molecules/TextInput/TextInput';
import InputWrapper from '../../Atoms/InputWrapper/InputWrapper';

type FancyTextInputHandler = (value?: string | number, e?: React.ChangeEvent<HTMLInputElement>) => void;
type FancyTextInputActiveHandler = (value: boolean) => void;

interface IFancyTextInputIncommingProps {
  label?: string;
  icon?: JSX.Element;
  value?: string | number;
  errorMessage?: string;
  disabled?: boolean;
  align?: 'left' | 'center';
  handler?: FancyTextInputHandler;
  activeHandler?: FancyTextInputActiveHandler;
};
export default function FancyTextInput(props: IFancyTextInputIncommingProps) {
  const { label, value, handler, activeHandler, disabled, errorMessage, align, icon } = props;
  const [inputValue, setInputValue] = useState<string | number>('');
  const [isActive, setIsActive] = useState(false);

  const id = useId();

  //this function is used to toggle the active state of the input
  const activeFocusHandler = (value: boolean) => {
    setIsActive(value);
    activeHandler && activeHandler(value);
  };

  const inputValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    handler && handler(value, e);
  };

  return (
    <InputWrapper id={id} icon={icon} disabled={disabled} align={align} isActiv={isActive} label={label} errorMessage={errorMessage}>
      <TextInput
        id={id}
        value={inputValue}
        handler={inputValueHandler}
        activeHandler={activeFocusHandler}
        disabled={disabled}
        errorMessage={errorMessage}
      />
    </InputWrapper>
  );
}
