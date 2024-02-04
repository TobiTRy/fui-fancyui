import { IDisabledDateSettings } from '@/components/molecules/MonthWithDays/utils/types/IDisableDateSettings.model';
import { IExternalMonthWithDays } from '@/components/molecules/MonthWithDays/utils/types/IExternalMonthWithDays.model';
import { IDateArray } from '@/components/molecules/RangeCalendar/IDateArray.model';
import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

export type TRangeCalendar = {
  selectedYear?: number;
  rangeCalendar: boolean;
  handler?: (date: IDateArray) => void;
  selectFromTo?: 'from' | 'to' | undefined;
  handleSwitchFromTo?: (change: 'from' | 'to') => void;
  disabledDateSetting?: IDisabledDateSettings;
  externalMonthsWithDays?: IExternalMonthWithDays[];
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
};
