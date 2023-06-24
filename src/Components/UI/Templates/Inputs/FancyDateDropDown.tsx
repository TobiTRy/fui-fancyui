import React, { useEffect, useState } from 'react';

import FancyDropDownSelect from '../../Organisms/FancyDropDownSelect/FancyDropDownSelect';
import IFancyDropDownSelect from '../../Organisms/FancyDropDownSelect/FancyDropDownSelect.model';
import generateYearZone from '../../Atoms/functions/helperFunctions/generateYearZone';
import generateMonthNames from '../../Atoms/functions/helperFunctions/generateMonthNames';
import generateDayNumbers from '../../Atoms/functions/helperFunctions/generateDayNumbers';

// this function creates the options for the dropdown day month and year
const generateOptions = (type: DateType, limitStart?: number, limitEnd?: number) => {
  //default limits for year
  const currentYear = new Date().getFullYear();

  // define the limits for the dropdowns
  const startYear = limitStart ? limitStart : currentYear - 120;
  const endYear = limitEnd ? limitEnd : new Date().getFullYear();

  const startMonth = limitStart ? limitStart : 0;
  const endMonth = limitEnd ? limitEnd : 11;

  const startDay = limitStart ? limitStart : 1;
  const endDay = limitEnd ? limitEnd : 31;

  switch (type) {
    case 'year':
      return generateYearZone(startYear, endYear);
    case 'month':
      return generateMonthNames(startMonth, endMonth);
    case 'day':
      return generateDayNumbers(startDay, endDay);
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
  const { type, yearLimits, monthLimits, ...inputProps } = props;
  const [inputOptions, setInputOptions] = useState<string[] | number[]>([]);

  // this useEffect is used to generate the options for the dropdown
  useEffect(() => {
    const generatedOptions = generateOptions(type);
    setInputOptions(generatedOptions);
  }, []);

  return <FancyDropDownSelect {...inputProps} values={inputOptions} />;
}

FancyDateDropDown.defaultProps = {
  type: 'month',
};
