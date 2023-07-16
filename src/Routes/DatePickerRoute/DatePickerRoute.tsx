import React from 'react';

import FancyDatePicker from '../../Components/UI/Organisms/FancyDatePicker/FancyDatePicker';

import FancyDateDropDown from '../../Components/UI/Templates/Inputs/FancyDateDropDown/FancyDateDropDown';
import IExternalYearWithMonths from '../../Components/UI/Molecules/MonthWithDays/IExternalMonthWithDays.model';



const externalYears: IExternalYearWithMonths = {
  2023: [
    {
      monthIdx: 7,
      dates: [
        {
          date: 1,
          isAvilable: 'not',
        },
      ],
    },
    {
      monthIdx: 5,
      dates: [
        {
          date: 1,
          isAvilable: 'not',
        },
        {
          date: 2,
          isAvilable: 'not',
        },
        {
          date: 3,
          isAvilable: 'partially',
        },
      ],
    },
  ],
  2024: [
    {
      monthIdx: 7,
      dates: [
        {
          date: 1,
          isAvilable: 'not',
        },
      ],
    },
    {
      monthIdx: 5,
      dates: [
        {
          date: 1,
          isAvilable: 'not',
        },
        {
          date: 2,
          isAvilable: 'not',
        },
        {
          date: 3,
          isAvilable: 'partially',
        },
      ],
    },
  ],
};


export default function DatePickerRoute() {
  return (
    <section>
      <div style={{display: 'flex', padding: '1rem', gap: '1rem'}}>
        <FancyDateDropDown type="day"  />
        <FancyDateDropDown type="month" />
        <FancyDateDropDown type="year" />
      </div>
      <FancyDatePicker disabledDateSetting={{disableWeekends: true}} externalData={externalYears}/>
      <p>Test</p>
    </section>
  );
}
