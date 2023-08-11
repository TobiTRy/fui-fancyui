import React, { useId, useState } from 'react';
import NumberInput, { INumberInput } from '../../Molecules/NumberInput/NumberInput';
import InputWrapper, { IInputWrapperUserInputProps } from '../../Molecules/InputWrapper/InputWrapper';

type IFancyNumberInput = INumberInput & IInputWrapperUserInputProps & { autoWidth?: boolean };

// --------------------------------------------------------------------------- //
// ----The NumberInput Comonent with surrounding icon, label and underline --- //
// --------------------------------------------------------------------------- //
export default function FancyNumberInput(props: IFancyNumberInput) {
  const { value, label, icon, activeHandler, disabled, errorMessage, align, id, autoWidth, ...inputProps } = props;

  //the states activity of the input
  const [isActiv, setIsActive] = useState(false);

  // if no id is provided, generate a random one
  const useid = useId();
  const usedId = id ? id : useid;

  // handles the focus and blur events and calls the handler from the parent
  const activeFocusHandler = (value: boolean) => {
    setIsActive(value);
    activeHandler && activeHandler(value);
  };

  return (
    <InputWrapper id={usedId} value={value} label={label} disabled={disabled} align={align} isActiv={isActiv} icon={icon} autoWidth={autoWidth} errorMessage={errorMessage}>
      <NumberInput id={usedId} value={value} align={align} disabled={disabled} activeHandler={activeFocusHandler} autoWidth={autoWidth} {...inputProps} />
    </InputWrapper>
  );
}
