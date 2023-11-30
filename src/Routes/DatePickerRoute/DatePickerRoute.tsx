/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import FancyDatePicker from '../../Components/organisms/FancyDatePicker/FancyDatePicker';

import FancyDateDropDown from '../../Components/Templates/Inputs/FancyDateDropDown/FancyDateDropDown';
import IExternalYearWithMonths from '../../Components/molecules/MonthWithDays/IExternalMonthWithDays.model';
import { DesignArea, DesignWrapper } from '../DesignWrapper/Wrapper';
import { FancyCard } from '@/Components/atoms/FancyCard';

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
    <FancyCard>
      <DesignWrapper>
        <DesignArea title="FancyDatePicker Range">
          <FancyDatePicker
            rangeCalendar={true}
            disabledDateSetting={{ disableWeekends: true }}
            externalData={externalYears}
            themeType="secondary"
          />
        </DesignArea>
        <DesignArea title="FancyDatePicker Single Date">
          <FancyDatePicker disabledDateSetting={{ disableWeekends: true }} externalData={externalYears} />
        </DesignArea>
      </DesignWrapper>
    </FancyCard>
  );
}
