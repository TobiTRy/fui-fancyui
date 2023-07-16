import React from 'react';

import FancyDatePicker from '../../Components/UI/Organisms/FancyDatePicker/FancyDatePicker';

import FancyDateDropDown from '../../Components/UI/Templates/Inputs/FancyDateDropDown/FancyDateDropDown';
import IExternalYearWithMonths from '../../Components/UI/Molecules/MonthWithDays/IExternalMonthWithDays.model';
import { DesignArea, DesignWrapper } from '../DesignWrapper/Wrapper';

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
    <DesignWrapper>
      <DesignArea title="FancyDatePicker Range">
        <FancyDatePicker rangeCalendar={true} disabledDateSetting={{ disableWeekends: true }} externalData={externalYears} />
      </DesignArea>
      <DesignArea title="FancyDatePicker Single Date">
        <FancyDatePicker  disabledDateSetting={{ disableWeekends: true }} externalData={externalYears} />
      </DesignArea>
    </DesignWrapper>
  );
}
