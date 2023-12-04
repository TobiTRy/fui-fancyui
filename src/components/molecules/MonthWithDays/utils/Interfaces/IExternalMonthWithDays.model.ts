import { IAvailableDot } from '@/components/atoms/AvilableDot/IAvailableDot.model';

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
