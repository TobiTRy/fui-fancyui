import { TLayer } from '@/types/TLayer';
import { TComponentSizes } from '@/types/TComponentSizes';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import React from 'react';

export type TWeekDays = {
  layer?: TLayer;
  border?: 'top' | 'bottom' | 'none';
  sizeC?: TComponentSizes;
  themeType?: TUiColorsNotTransparent;
  startWeekOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
};

type NativeAttrs = React.HTMLAttributes<HTMLDivElement>;

export type TWeekDaysWithNativeAttrs = TWeekDays & NativeAttrs;
