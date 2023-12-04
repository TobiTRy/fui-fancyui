import { useId, useState } from 'react';

import InputWrapper from '../../molecules/InputWrapper/InputWrapper';
import DropDownSelect, { IDropDownSelect } from '../../atoms/DropDownSelect/DropDownSelect';

import { IInputWrapperUserInputProps } from '../../molecules/InputWrapper/InputWrapper';

export type IFancyDropDownSelect = Omit<IInputWrapperUserInputProps, 'InputElement'> & IDropDownSelect;

// --------------------------------------------------------------------------- //
// ----The Dropdown Comonent with surrounding icon, label and underline ------ //
// --------------------------------------------------------------------------- //
export default function FancyDropDownSelect(props: IFancyDropDownSelect) {
  const { id, value, placeholder, disabled, align, activeHandler, icon, label, errorMessage, themeType, layer, ...inputProps } = props;

  //the states for the value and the activity of the input
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
      placeholder={placeholder}
      themeType={themeType}
      layer={layer}
      value={value}
      label={label}
      disabled={disabled}
      align={align}
      isActive={isActive}
      icon={icon}
      errorMessage={errorMessage}
      InputElement={
        <DropDownSelect
          id={usedId}
          value={value}
          align={align}
          disabled={disabled}
          activeHandler={activeFocusHandler}
          placeholder={placeholder}
          {...inputProps}
        />
      }
    />
  );
}
