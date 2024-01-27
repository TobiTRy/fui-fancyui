/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import FancyDatePicker from '../../components/organisms/FancyDatePicker/FancyDatePicker';

import FancyDateDropDown from '../../components/templates/FancyDateDropDown/FancyDateDropDown';
import IExternalYearWithMonths from '../../components/molecules/MonthWithDays/utils/Interfaces/IExternalMonthWithDays.model';
import { DesignArea, DesignWrapper } from '../DesignWrapper/Wrapper';
import { Card } from '@/components/molecules/Card';

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
    <Card>
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
    </Card>
  );
}
