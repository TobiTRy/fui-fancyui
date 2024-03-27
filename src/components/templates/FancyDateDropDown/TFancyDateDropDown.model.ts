import { TFancyDropDownSelect } from '@/components/organisms/FancyDropDownSelect';

export type TDateType = 'year' | 'month' | 'day';

export type TFancyDateDropDown = {
  type?: TDateType;
  dateLimits?: [number, number];
};

type TDropdownSelect = Omit<TFancyDropDownSelect, 'values' | ''>;

export type TFancyDateDropDownWithFancyDropDownSelect = TFancyDateDropDown & TDropdownSelect;
