import FancyDatePicker from '../../components/templates/FancyDatePicker/FancyDatePicker';

import { DateOutput } from '@/components/atoms/DateOutput';
import { Card } from '@/components/molecules/Card';
import IExternalYearWithMonths from '../../components/molecules/MonthWithDays/utils/types/IExternalMonthWithDays.model';
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
    {
      monthIdx: 11,
      dates: [
        {
          date: 27,
          isAvilable: 'not',
        },
        {
          date: 28,
          isAvilable: 'not',
        },
        {
          date: 29,
          isAvilable: 'not',
        },
        {
          date: 30,
          isAvilable: 'partially',
        },
      ],
    },
  ],
  2024: [
    {
      monthIdx: 0,
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
            layer={2}
          />
          <DateOutput />
        </DesignArea>
        {/* <DesignArea title="FancyDatePicker Single Date">
          <FancyDatePicker disabledDateSetting={{ disableWeekends: true }} externalData={externalYears} />
        </DesignArea> */}
        <h1>Mooiinnn</h1>
        <h1>Mooiinnn</h1>
        <h1>Mooi sdsdsdsdsdds sdsdsd d sdsdsd innn</h1>
        <h1>Mooiinnn</h1>
        <h1>Mooiinnn</h1>
        <h1>Mooiinnn</h1>
        <h1>Mooiinnn</h1>
        <h1>Mooiinnn</h1>
        <h1>Mooiinnn</h1>
        <h1>Mooiinnn</h1>
        <h1>Mooiinnn</h1>
        <h1>Mooiinnn</h1>
        <h1>Mooiinnn</h1>
        <h1>Mooiinnn</h1>
        <h1>Mooiinnn</h1>
        <h1>Mooiinnn</h1>
        <h1>Mooiinnn</h1>
        <h1>Mooiinnn</h1>
        <h1>Mooiinnn</h1>
      </DesignWrapper>
    </Card>
  );
}
