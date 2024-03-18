import { TDay } from './utils/types/TDay.model';
import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

import { IDisabledDateSettings } from '@/components/molecules/MonthWithDays/utils/types/IDisableDateSettings.model';
import { IExternalMonthWithDays } from '@/components/molecules/MonthWithDays/utils/types/IExternalMonthWithDays.model';
import { TDateArray } from '@/components/molecules/Calendar/TCalendar.model';

export type TMonthWithDays = {
  monthIdx: number;
  year: number;
  handleDateClick?: (day: TDay, monthIdx: number, year: number) => void;
  isRangePicking?: boolean;
  selectedDates: TDateArray;
  externalMonthWithDays?: IExternalMonthWithDays;
  disabledDateSetting?: IDisabledDateSettings;
  themeType?: TUiColorsNotTransparent;
  startWeekOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  layer?: TLayer;
};

export type TMonthWithDaysWithHTMLAttrs = TMonthWithDays & React.HTMLAttributes<HTMLDivElement>;
