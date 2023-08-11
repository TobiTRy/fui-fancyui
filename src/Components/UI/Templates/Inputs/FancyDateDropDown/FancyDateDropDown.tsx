import React, { useEffect, useState } from 'react';

import FancyDropDownSelect, { IFancyDropDownSelect } from '../../../Organisms/FancyDropDownSelect/FancyDropDownSelect';
import generateYearZone from '../../../HelperFunctions/generateFunctions/generateYearZone';
import generateMonthNames from '../../../HelperFunctions/generateFunctions/generateMonthNames';
import generateDayNumbers from '../../../HelperFunctions/generateFunctions/generateDayNumbers';

// this function creates the options for the dropdown day month and year
const generateOptions = (type: DateType, limitStart?: number, limitEnd?: number) => {
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

type DateType = 'year' | 'month' | 'day';
interface IFancyDateDropDown extends IFancyDropDownSelect {
  type: DateType;
  yearLimits?: [number, number];
  monthLimits?: [number, number];
  dayLimits?: [number, number];
}
// --------------------------------------------------------------------------- //
// -------------- Fancy Date DropDown to Pick a day/month/year --------------- //
// --------------------------------------------------------------------------- //
export default function FancyDateDropDown(props: IFancyDateDropDown) {
  const { type = 'year', yearLimits, monthLimits, ...inputProps } = props;
  const [inputOptions, setInputOptions] = useState<string[]>([]);

  // this useEffect is used to generate the options for the dropdown
  useEffect(() => {

    let limitStart, limitEnd;
    switch (type) {
      case 'year': {
        limitEnd = yearLimits ? yearLimits[1] : undefined;
        limitStart = yearLimits ? yearLimits[0] : undefined;
        break;
      }
      case 'month': {
        limitEnd = monthLimits ? monthLimits[1] : undefined;
        limitStart = monthLimits ? monthLimits[0] : undefined;
        break;
      }
      case 'day': {
        limitEnd = monthLimits ? monthLimits[1] : undefined;
        limitStart = monthLimits ? monthLimits[0] : undefined;
        break;
      }
    }

    const generatedOptions = generateOptions(type, limitStart, limitEnd);
    setInputOptions(generatedOptions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <FancyDropDownSelect {...inputProps} values={inputOptions} />;
}
