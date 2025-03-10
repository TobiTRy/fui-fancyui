import { TComponentSizes, TComponentSizesExtended, TComponentSizesMid } from '@/types/TComponentSizes';

export type TSizeSettings<T> = {
  [K in TComponentSizes]: T;
};

export type TSizeSettingsMid<T> = {
  [K in TComponentSizesMid]: T;
};

export type TSizeSettingsExtended<T> = {
  [K in TComponentSizesExtended]: T;
};
