import React, { ChangeEvent, useId, useState } from 'react';

import InputWrapper from '../../Molecules/InputWrapper/InputWrapper';
import DropDownSelect, { IDropDownSelect } from '../../Atoms/DropDownSelect/DropDownSelect';

import { IInputWrapperProps } from '../../Molecules/InputWrapper/InputWrapper';

type ITyDropDownSelect = IInputWrapperProps & Omit<IDropDownSelect, 'id'>;

// --------------------------------------------------------------------------- //
// ----The Dropdown Comonent with surrounding icon, label and underline ------ //
// --------------------------------------------------------------------------- //
export default function FancyDropDownSelect(props: ITyDropDownSelect) {
  const { values, disabled, name, align, handler, activeHandler, ariaLabel, icon, label } = props;

  const [selectedValue, setselectedValue] = useState('');
  const [isActiv, setIsActive] = useState(false);

  const id = useId();

  const activeFocusHandler = (value: boolean) => {
    setIsActive(value);
    activeHandler && activeHandler(value);
  };

  const changeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const incomingValue = e.target.value;

    setselectedValue(incomingValue ? incomingValue : '');
    handler && handler(e);
  };

  return (
    <InputWrapper id={id} label={label} disabled={disabled} align={align} isActiv={isActiv} icon={icon}>
      <DropDownSelect
        id={id}
        handler={changeHandler}
        activeHandler={activeFocusHandler}
        selectedValue={selectedValue}
        values={values}
        disabled={disabled}
        name={name}
        align={align}
        ariaLabel={ariaLabel}
      />
    </InputWrapper>
  );
}
