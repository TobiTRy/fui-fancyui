import React, { ChangeEvent } from 'react';

import FancyDatePicker from '../../Components/UI/Organisms/FancyDatePicker/FancyDatePicker';
import Calendar from '../../Components/UI/Molecules/Calendar/Calendar';
import DateOutput from '../../Components/UI/Atoms/DateOutput/DateOutput';
import FancyInput from '../../Components/UI/Molecules/FancyInput/FancyInputOld';
import FancyDateDropDown from '../../Components/UI/Templates/Inputs/FancyDateDropDown';
import InputWrapper from '../../Components/UI/Atoms/InputWrapper/InputWrapper';
import RawInput from '../../Components/UI/Atoms/RawInput';
import TextInput from '../../Components/UI/Molecules/TextInput/TextInput';


export default function DatePickerRoute() {



  return (
    <section>
      <div style={{display: 'flex', padding: '1rem', gap: '1rem'}}>
        <FancyDateDropDown type="day" inputTextAlign='center' />
        <FancyDateDropDown type="month" />
        <FancyDateDropDown type="year" />
      </div>
      <FancyDatePicker />
      <FancyInput label={'Test'} type="date" />
      <p>Test</p>

    </section>
  );
}
