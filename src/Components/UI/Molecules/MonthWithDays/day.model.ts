import { IRange } from '../../Atoms/DateNumberAtom/DateNumberAtom';
import { IAvailableDot } from '../../Atoms/AvilableDot/AvailableDot';

interface Day {
  number: number;
  isSelected: boolean;
  range: IRange;
  disabled: boolean;
  isAvilable?: IAvailableDot;
}

export default Day;
