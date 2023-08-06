
const generateYearOptions = (start?: number, end?: number) => {
  let startYear = start || 0;
  let endYear = end || 11;

  const years = [];
  for (let i = startYear; i <= endYear; i++) {
    years.push(i.toString());
  };
  const reverseYears = years.reverse();
  return reverseYears;
};

export default generateYearOptions;