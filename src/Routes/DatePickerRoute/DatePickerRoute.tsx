import React from 'react';

import FancyDatePicker from '../../Components/UI/Organisms/FancyDatePicker/FancyDatePicker';

import FancyDateDropDown from '../../Components/UI/Templates/Inputs/FancyDateDropDown/FancyDateDropDown';


export default function DatePickerRoute() {
  return (
    <section>
      <div style={{display: 'flex', padding: '1rem', gap: '1rem'}}>
        <FancyDateDropDown type="day" align='center' />
        <FancyDateDropDown type="month" />
        <FancyDateDropDown type="year" />
      </div>
      <FancyDatePicker disabledDateSetting={{disableWeekends: true}} />
      <p>Test</p>
    </section>
  );
}
