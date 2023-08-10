import React, { ChangeEvent, useId, useState } from 'react'

import InputWrapper from '../../Molecules/InputWrapper/InputWrapper'
import DropDownSelect from '../../Atoms/DropDownSelect/DropDownSelect'

interface ITyDropDownSelect {
  values?: string[];
  value?: string;
  disabled?: boolean;
  name?: string;
  align?: 'left' | 'center';
  handler?: (e: ChangeEvent<HTMLSelectElement>) => void ;
  activeHandler?: (value: boolean) => void ;
  ariaLabel?: string;
  icon?: JSX.Element;
  label?: string;
}

export default function TRyDropDownSelect(props: ITyDropDownSelect) {
  const { values, value, disabled, name, align, handler, activeHandler, ariaLabel, icon, label } = props;
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
    props.handler && props.handler(e);
  };

  return (
    <InputWrapper id={id}>
      <DropDownSelect id={id} handler={changeHandler} value={selectedValue} values={values} />
    </InputWrapper>
  )
}
