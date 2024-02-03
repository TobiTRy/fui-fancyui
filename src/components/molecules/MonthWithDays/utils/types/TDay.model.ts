import { IAvailableDot } from '@/components/atoms/AvilableDot/IAvailableDot.model';
import { IRange } from '@/components/atoms/DateNumberAtom/IDateNumberAtom.model';

export type TDay = {
  number: number;
  isSelected: boolean;
  range: IRange;
  disabled: boolean;
  isAvilable?: IAvailableDot;
};
