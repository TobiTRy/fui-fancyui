import { TDay } from '@/components/molecules/MonthWithDays/utils/types/TDay.model';
import { TDateOnlyArray } from '@/components/molecules/Calendar/TCalendar.model';

export type TSelectDayRange = {
  day: TDay;
  monthIndex: number;
  selectedYear: number;
  selectedDates: TDateOnlyArray;
  selectFromTo: 'from' | 'to' | undefined;
  handleSwitchFromTo: ((change: 'from' | 'to') => void) | undefined;
};
