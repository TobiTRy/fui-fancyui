import React from 'react';

import InputCreator from '../InputCreator/InputCreator';
import DropDownSelect from '../../Atoms/DropDownSelect/DropDownSelect';
import IFancyDropDownSelect from './FancyDropDownSelect.model';

// --------------------------------------------------------------------------- //
// ----The Dropdown Comonent with surrounding icon, label and underline ------ //
// --------------------------------------------------------------------------- //
export default function FancyDropDownSelect(props: IFancyDropDownSelect) {
  return <InputCreator {...props} InputComponent={DropDownSelect} />;
}
