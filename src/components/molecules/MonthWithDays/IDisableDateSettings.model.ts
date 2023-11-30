export type IWeekDays = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export interface IDisabledDateSettings {
  disablePastDates?: boolean;
  disableWeekends?: boolean;
  disabledWeekdays?: IWeekDays[];
}
