import { IRange } from "../../Atoms/DateNumberAtom/DateNumberAtom";

interface Day {
  number: number;
  isSelected: boolean;
  range: IRange;
  disabled: boolean;
}

export default Day;