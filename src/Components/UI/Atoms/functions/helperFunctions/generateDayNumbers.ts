const generateDayNumbers = (start?: number, end?: number):number[] => {
  let startDay = start || 1;
  let endDay = end || 31;

  //when the start month is bigger than the end month turn the value around
  if (startDay > endDay) {
    const temp = startDay;
    startDay = endDay;
    endDay = temp;
  };
  
  // generate the array with the days
  const days = [];
  for (let i = startDay; i <= endDay; i++) {
    days.push(i);
  };


  return days;
};

export default generateDayNumbers;