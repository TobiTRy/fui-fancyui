// ---------- generate the array with the months names  ------- //
const generateMonthArray = (start?: number, end?: number) => {
  let monthStart = start || 0;
  let monthEnd = end || 11;

  //when the start month is bigger than the end month turn the value around
  if (monthStart > monthEnd) {
    const temp = monthStart;
    monthStart = monthEnd;
    monthEnd = temp;
  }

  const months = [];
  for (let i = monthStart; i <= monthEnd; i++) {
    months.push(i);
  }
  return months;
};

// --------------------------------------------------------------------------- //
// --------------- The main function to generate the Month names  ------------ //
// --------------------------------------------------------------------------- //
const generateMonthNames = (start?: number, end?: number): string[] => {
  // the start and end can use to generate a area of months like January - March
  const months = generateMonthArray(start, end);

  const generateMonthNames = months.map((month) => {
    return new Date(0, month).toLocaleDateString(undefined, { month: 'long' });
  });

  return generateMonthNames;
};

export default generateMonthNames;
