import { TComponentSizes, TComponentSizesExtended } from '@/types/TComponentSizes';

export type TSizeSettings<T> = {
  [K in TComponentSizes]: T;
};

export type TSizeSettingsExtended<T> = {
  [K in TComponentSizesExtended]: T;
};
