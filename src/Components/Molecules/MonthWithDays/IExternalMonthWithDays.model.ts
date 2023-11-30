import { IAvailableDot } from '../../atoms/AvilableDot/AvailableDot';

export type IDateWithExternalState = {
  date: number;
  isAvilable: IAvailableDot;
};

export interface IExternalMonthWithDays {
  monthIdx: number;
  dates?: IDateWithExternalState[];
}

interface IExternalYearWithMonths {
  [key: number]: IExternalMonthWithDays[];
}

export default IExternalYearWithMonths;
