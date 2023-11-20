
const generateYearOptions = (start?: number, end?: number) => {
  const startYear = start || 0;
  const endYear = end || 11;

  const years = [];
  for (let i = startYear; i <= endYear; i++) {
    years.push(i.toString());
  }
  const reverseYears = years.reverse();
  return reverseYears;
};

export default generateYearOptions;