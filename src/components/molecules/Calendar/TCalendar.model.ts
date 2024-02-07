import { IDisabledDateSettings } from '@/components/molecules/MonthWithDays/utils/types/IDisableDateSettings.model';
import IExternalYearWithMonths from '@/components/molecules/MonthWithDays/utils/types/IExternalMonthWithDays.model';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

import { TLayer } from '@/types/TLayer';

export type TDateArray = [Date | undefined, Date | undefined] | Date;

export type TDateOnlyArray = [Date | undefined, Date | undefined];

export type TCalendar = {
  selectedYear?: number;
  rangeCalendar: boolean;
  handleDates?: (date: TDateArray) => void;
  selectFromTo?: 'from' | 'to' | undefined;
  yearHandler?: (year: number) => void;
  handleSwitchFromTo?: (change: 'from' | 'to') => void;
  disabledDateSetting?: IDisabledDateSettings;
  externalMonthsWithDays?: IExternalYearWithMonths;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
};
