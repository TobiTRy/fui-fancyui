import { IRange } from "../../Atoms/DateNumberAtom/DateNumberAtom";
import { IAvilableDot } from "../../Atoms/AvilableDot";

interface Day {
  number: number;
  isSelected: boolean;
  range: IRange;
  disabled: boolean;
  isAvilable?: IAvilableDot;
}

export default Day;