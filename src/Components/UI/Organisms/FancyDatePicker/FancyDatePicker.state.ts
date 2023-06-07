import { create } from "zustand";

interface IFancyDatePickerState {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;

  selectedDateRange: [Date, Date];
  setSelectedDateRange: (dateRange: [Date, Date]) => void;

  selectedYear: number;
  setSelectedYear: (year: number) => void;

  isSelectingFirstDate: boolean;
  setIsSelectingFirstDate: (state: boolean) => void;

  isSelectingSecondDate: boolean;
  setisSelectingSecondDate: (state: boolean) => void;
};

export const useFancyDatePickerState = create<IFancyDatePickerState>((set) => ({
  selectedDate: new Date(),
  setSelectedDate: (date: Date) => set({ selectedDate: date }),

  selectedDateRange: [new Date(), new Date()],
  setSelectedDateRange: (dateRange: [Date, Date]) => set({ selectedDateRange: dateRange }),

  selectedYear: new Date().getFullYear(),
  setSelectedYear: (year: number) => set({ selectedYear: year }),

  isSelectingFirstDate: false,
  setIsSelectingFirstDate: (boolean) => set({ isSelectingFirstDate: boolean}),

  isSelectingSecondDate: false,
  setisSelectingSecondDate: (boolean) => set({ isSelectingSecondDate: boolean }),
}));