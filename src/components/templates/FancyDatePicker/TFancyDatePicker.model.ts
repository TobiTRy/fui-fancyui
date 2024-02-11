import { IDisabledDateSettings } from '@/components/molecules/MonthWithDays/utils/types/IDisableDateSettings.model';
import IExternalYearWithMonths from '@/components/molecules/MonthWithDays/utils/types/IExternalMonthWithDays.model';
import { TDateArray, TYearMonth } from '@/components/molecules/Calendar/TCalendar.model';

import { TUiColorsMain } from '@/types/TUiColorsMain';
import { TLayer } from '@/types/TLayer';

export type TFancyDatePicker = {
  rangeCalendar?: boolean;
  handler?: (date: TDateArray) => void;
  monthYearInView?: TYearMonth;
  disabledDateSetting?: IDisabledDateSettings;
  externalData?: IExternalYearWithMonths;
  themeType?: Exclude<TUiColorsMain, 'accent'>;
  layer?: TLayer;
  yearSelector?: {
    ariaTextLeftArrow: string;
    ariaTextRightArrow: string;
  };
};
