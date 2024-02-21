import { TDateArray } from '@/components/molecules/Calendar';
import { IDisabledDateSettings } from '@/components/molecules/MonthWithDays/utils/types/IDisableDateSettings.model';
import { IDateWithExternalState } from '@/components/molecules/MonthWithDays/utils/types/IExternalMonthWithDays.model';

export type TCreateDaysOfMonth = {
  monthIdx: number;
  year: number;
  selectedDates: TDateArray;
  disabledDateSetting?: IDisabledDateSettings;
  isRangePicking?: boolean;
  externalMonthWithDays?: IDateWithExternalState[];
  fillAdjacentMonths?: boolean;
  weekStartsOn?: number; // New property to specify the first day of the week
};
