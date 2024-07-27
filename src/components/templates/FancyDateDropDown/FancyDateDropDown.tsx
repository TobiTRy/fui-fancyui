'use client';

import { FancyDropDownSelect } from '@/components/organisms/FancyDropDownSelect';
import generateDayNumbers from '@/utils/functions/generateFunctions/generateDayNumbers';
import generateMonthNames from '@/utils/functions/generateFunctions/generateMonthNames';
import generateYearZone from '@/utils/functions/generateFunctions/generateYearZone';

import { TDateType, TFancyDateDropDownWithFancyDropDownSelect } from './TFancyDateDropDown.model';

// --------------------------------------------------------------------------- //
// -------------- Fancy Date DropDown to Pick a day/month/year --------------- //
// --------------------------------------------------------------------------- //
export default function FancyDateDropDown(props: TFancyDateDropDownWithFancyDropDownSelect) {
  const { type = 'year', dateLimits, ...inputProps } = props;

  const dateMonthOrYearNumbers = generateOptions(type, dateLimits);

  return <FancyDropDownSelect {...inputProps} values={dateMonthOrYearNumbers} emptySelect={true} />;
}

// this function creates the options for the dropdown day month and year
const generateOptions = (type: TDateType, dateLimits?: [number, number]) => {
  const limitStart = dateLimits ? dateLimits[0] : undefined;
  const limitEnd = dateLimits ? dateLimits[1] : undefined;

  //default limits for year
  const currentYear = new Date().getFullYear();

  // add the options to the dropdown with the given limits
  switch (type) {
    case 'year': {
      // create limits for the year with default values if not given
      const startYear = limitStart ? limitStart : currentYear - 120;
      const endYear = limitEnd ? limitEnd : new Date().getFullYear();

      return generateYearZone(startYear, endYear);
    }
    case 'month': {
      // create limits for the month with default values if not given
      const startMonth = limitStart ? limitStart : 0;
      const endMonth = limitEnd ? limitEnd : 11;

      return generateMonthNames(startMonth, endMonth);
    }
    case 'day': {
      // create limits for the day with default values if not given
      const startDay = limitStart ? limitStart : 1;
      const endDay = limitEnd ? limitEnd : 31;

      return generateDayNumbers(startDay, endDay);
    }
  }
};
