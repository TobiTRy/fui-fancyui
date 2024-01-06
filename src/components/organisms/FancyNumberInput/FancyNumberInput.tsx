import { useId, useState } from 'react';

import NumberInput, { INumberInput } from '@/components/atoms/NumberInput/NumberInput';
import InputWrapper from '@/components/molecules/InputWrapper/InputWrapper';
import { IInputWrapperUserInputProps } from '@/components/molecules/InputWrapper/IInputWrapper.model';

type IFancyNumberInput = INumberInput & IInputWrapperUserInputProps & { autoWidth?: boolean };

// --------------------------------------------------------------------------- //
// ----The NumberInput Comonent with surrounding icon, label and underline --- //
// --------------------------------------------------------------------------- //
export default function FancyNumberInput(props: IFancyNumberInput) {
  const {
    value,
    label,
    icon,
    activeHandler,
    disabled,
    systemMessage,
    align,
    id,
    themeType,
    layer,
    autoWidth,
    placeholder,
    ...inputProps
  } = props;

  //the states activity of the input
  const [isActive, setIsActive] = useState(false);

  // if no id is provided, generate a random one
  const useid = useId();
  const usedId = id ? id : useid;

  // handles the focus and blur events and calls the handler from the parent
  const activeFocusHandler = (value: boolean) => {
    setIsActive(value);
    activeHandler && activeHandler(value);
  };

  return (
    <InputWrapper
      id={usedId}
      value={value}
      label={label}
      disabled={disabled}
      align={align}
      placeholder={placeholder}
      isActive={isActive}
      icon={icon}
      autoWidth={autoWidth}
      systemMessage={systemMessage}
      themeType={themeType}
      layer={layer}
      InputElement={
        <NumberInput
          id={usedId}
          value={value}
          align={align}
          disabled={disabled}
          activeHandler={activeFocusHandler}
          placeholder={placeholder}
          autoWidth={autoWidth}
          {...inputProps}
        />
      }
    />
  );
}
