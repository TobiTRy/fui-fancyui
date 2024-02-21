import { IDisabledDateSettings } from '@/components/molecules/MonthWithDays/utils/types/IDisableDateSettings.model';
import IExternalYearWithMonths from '@/components/molecules/MonthWithDays/utils/types/IExternalMonthWithDays.model';
import { TDateArray, TYearMonth } from '@/components/molecules/Calendar/TCalendar.model';

import { TUiColorsMain } from '@/types/TUiColorsMain';
import { TLayer } from '@/types/TLayer';

export type TFancyDatePicker = {
  rangeCalendar?: boolean;
  dateSelectHandler?: (date: TDateArray) => void;
  monthYearInView?: TYearMonth;
  disabledDateSetting?: IDisabledDateSettings;
  externalData?: IExternalYearWithMonths;
  themeType?: Exclude<TUiColorsMain, 'accent'>;
  layer?: TLayer;
  startWeekOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  yearSelector?: {
    ariaTextLeftArrow: string;
    ariaTextRightArrow: string;
  };
};
