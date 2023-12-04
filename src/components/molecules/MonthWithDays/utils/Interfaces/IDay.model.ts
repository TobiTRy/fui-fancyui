import { IAvailableDot } from '@/components/atoms/AvilableDot/IAvailableDot.model';
import { IRange } from '@/components/atoms/DateNumberAtom/IDateNumberAtom.model';

interface IDay {
  number: number;
  isSelected: boolean;
  range: IRange;
  disabled: boolean;
  isAvilable?: IAvailableDot;
}

export default IDay;
