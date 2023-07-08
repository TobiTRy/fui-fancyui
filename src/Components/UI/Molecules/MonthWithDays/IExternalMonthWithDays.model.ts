import { IAvilableDot } from "../../Atoms/AvilableDot";

export type IDateWithExternalState = {
  date: number;
  isAvilable: IAvilableDot;
};

interface IExternalMonthWithDays {
  monthIdx: number;
  year: number;
  dates?: IDateWithExternalState[];
}

export default IExternalMonthWithDays;