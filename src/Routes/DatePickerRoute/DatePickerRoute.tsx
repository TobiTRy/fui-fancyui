import React, { ChangeEvent } from 'react';

import FancyDatePicker from '../../Components/UI/Organisms/FancyDatePicker/FancyDatePicker';
import FancyInput from '../../Components/UI/Molecules/FancyInput/FancyInputOld';
import FancyDateDropDown from '../../Components/UI/Templates/Inputs/FancyDateDropDown';

export default function DatePickerRoute() {
  return (
    <section>
      <div style={{display: 'flex', padding: '1rem', gap: '1rem'}}>
        <FancyDateDropDown type="day" align='center' />
        <FancyDateDropDown type="month" />
        <FancyDateDropDown type="year" />
      </div>
      <FancyDatePicker />
      <FancyInput label={'Test'} type="date" />
      <p>Test</p>
    </section>
  );
}
