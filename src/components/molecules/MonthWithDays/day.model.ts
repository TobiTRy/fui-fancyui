import { IRange } from '../../atoms/DateNumberAtom/DateNumberAtom';
import { IAvailableDot } from '../../atoms/AvilableDot/AvailableDot';

interface Day {
  number: number;
  isSelected: boolean;
  range: IRange;
  disabled: boolean;
  isAvilable?: IAvailableDot;
}

export default Day;
