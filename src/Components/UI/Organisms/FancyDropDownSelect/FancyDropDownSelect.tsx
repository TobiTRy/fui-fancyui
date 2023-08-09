import React, { ChangeEvent, useEffect, useState } from 'react';

import InputCreator, { IInputCreatorHandler } from '../../Molecules/InputCreator/InputCreator';
import DropDownSelect from '../../Atoms/DropDownSelect/DropDownSelect';
import IFancyDropDownSelect from './FancyDropDownSelect.model';

// --------------------------------------------------------------------------- //
// ----The Dropdown Comonent with surrounding icon, label and underline ------ //
// --------------------------------------------------------------------------- //
export default function FancyDropDownSelect(props: IFancyDropDownSelect) {
  const [values, setValues] = useState<string[]>([]);
  const [value, setValue] = useState<string>('');
  
  const changeHandler: IInputCreatorHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const incomingValue = e.target.value;
    
    setValue(incomingValue ? incomingValue : '');
    props.handler && props.handler(e);
  };

  useEffect(() => {
    if (props.values) {
      setValues(props.values);
    }
  }, [props.values]);

  return <InputCreator {...props} values={values} value={value} handler={changeHandler} InputComponent={DropDownSelect} />;
}
