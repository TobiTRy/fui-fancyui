import { IDisabledDateSettings } from '@/components/molecules/MonthWithDays/utils/types/IDisableDateSettings.model';
import IExternalYearWithMonths from '@/components/molecules/MonthWithDays/utils/types/IExternalMonthWithDays.model';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { TLayer } from '@/types/TLayer';

export type TDateArray = [Date | undefined, Date | undefined] | Date;

export type TDateOnlyArray = [Date | undefined, Date | undefined];

export type TYearMonth = {
  year: number;
  month: number;
};

export type TCalendar = {
  selectedYearMonth?: TYearMonth;
  rangeCalendar: boolean;
  selectFromTo?: 'from' | 'to' | undefined;
  handleDates?: (date: TDateArray) => void;
  currentInViewhandler?: (date: TYearMonth) => void;
  handleSwitchFromTo?: (change: 'from' | 'to') => void;
  disabledDateSetting?: IDisabledDateSettings;
  externalMonthsWithDays?: IExternalYearWithMonths;
  startWeekOnDay?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  startCalendarDate?: TYearMonth;
  endCalendarDate?: TYearMonth;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
};
