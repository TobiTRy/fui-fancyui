import { IStatus } from '@/types/IStatus';
import { TLayer } from '@/types/TLayer';
import { TUiColorTypes } from '@/types/TUiColorTypes';

export type TSingleInputs = {
  length?: number;
  handler?: (value: string) => void;
  status?: Pick<IStatus, 'isError' | 'isSucceed'>;
  automaticCase?: 'upper' | 'lower';
  themeType?: TUiColorTypes;
  layer?: TLayer;
};
