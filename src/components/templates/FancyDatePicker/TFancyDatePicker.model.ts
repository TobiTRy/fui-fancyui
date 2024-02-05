import { IDisabledDateSettings } from '@/components/molecules/MonthWithDays/utils/types/IDisableDateSettings.model';
import IExternalYearWithMonths from '@/components/molecules/MonthWithDays/utils/types/IExternalMonthWithDays.model';
import { IDateArray } from '@/components/molecules/RangeCalendar/IDateArray.model';
import { TUiColorsMain } from '@/types/TUiColorsMain';
import { TLayer } from '@/types/TLayer';

export type TFancyDatePicker = {
  rangeCalendar?: boolean;
  handler?: (date: IDateArray) => void;
  selectedYear?: number;
  disabledDateSetting?: IDisabledDateSettings;
  externalData?: IExternalYearWithMonths;
  themeType?: Exclude<TUiColorsMain, 'accent'>;
  layer?: TLayer;
};
