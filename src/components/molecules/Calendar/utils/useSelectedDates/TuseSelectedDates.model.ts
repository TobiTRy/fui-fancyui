import { TDateArray } from '@/components/molecules/Calendar/TCalendar.model';

export type TSelectRange = {
  selectFromTo: 'from' | 'to' | undefined;
  handleSwitchFromTo: ((change: 'from' | 'to') => void) | undefined;
  handleDates: ((date: TDateArray) => void) | undefined;
  rangeCalendar: true;
};

type TSelectSingle = {
  rangeCalendar?: false | undefined;
  handleDates: ((date: Date) => void) | undefined;
  selectFromTo: unknown;
};

export type TuseSelectedDates = TSelectRange | TSelectSingle;
