import { IDisabledDateSettings, IWeekDays } from './Interfaces/IDisableDateSettings.model';

// 0 - Sunday, 1 - Monday, 2 - Tuesday, 3 - Wednesday, 4 - Thursday, 5 - Friday, 6 - Saturday
// this function disables dates based on the following parameters:
export const disableDate = (date: Date, disabledDateSetting?: IDisabledDateSettings): boolean => {
  const { disablePastDates = false, disableWeekends = false, disabledWeekdays = [] } = disabledDateSetting || {};

  const dateDay = date.getDay() as IWeekDays;

  const isWeekend = date.getDay() === 0 || date.getDay() === 6;
  const isPast = date.getTime() < Date.now();
  const isDisabledDay = disabledWeekdays?.includes(dateDay);
  const disableSpecificDates =
    (disablePastDates ? isPast : false) ||
    (disableWeekends ? isWeekend : false) ||
    (disabledWeekdays ? !!isDisabledDay : false);

  return disableSpecificDates;
};
