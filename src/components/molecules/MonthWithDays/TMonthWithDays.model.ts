import { TDay } from './utils/types/TDay.model';
import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { IDateArray } from '@/components/molecules/RangeCalendar/IDateArray.model';
import { IDisabledDateSettings } from '@/components/molecules/MonthWithDays/utils/types/IDisableDateSettings.model';
import { IExternalMonthWithDays } from '@/components/molecules/MonthWithDays/utils/types/IExternalMonthWithDays.model';

export type TMonthWithDays = {
  monthIdx: number;
  year: number;
  handleDateClick?: (day: TDay, monthIdx: number) => void;
  isRangePicking?: boolean;
  selectedDates: IDateArray;
  externalMonthWithDays?: IExternalMonthWithDays;
  disabledDateSetting?: IDisabledDateSettings;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
};
