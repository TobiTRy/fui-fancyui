import { IAvilableDot } from "../../Atoms/AvilableDot/AvilableDot";

export type IDateWithExternalState = {
  date: number;
  isAvilable: IAvilableDot;
};

export interface IExternalMonthWithDays {
  monthIdx: number;
  dates?: IDateWithExternalState[];
}

interface IExternalYearWithMonths {
  [key: number]: IExternalMonthWithDays[];
}

export default IExternalYearWithMonths;
