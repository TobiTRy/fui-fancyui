const calcCSSValuesWithOffset = (cssValues: string, offset: number) => {
  const values = cssValues.split(' ');

  const newValues = values.map((value) => {
    if (value.includes('px')) {
      const number = Number(value.replace('px', ''));
      return `${number + offset}px`;
    }

    return value;
  });

  return newValues.join(' ');
};

export default calcCSSValuesWithOffset;
