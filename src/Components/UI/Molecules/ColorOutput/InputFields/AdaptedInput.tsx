import React from 'react';
import FancyInput from '../../FancyInput/FancyInput';

interface IAdapedInput {
  inputLetter: string;
  handler: () => void;
  value: number;
}

const colorLettersObject = [
  {
    colorLetter: 'a',
    min: 0,
    max: 1,
    step: 0.01,
  },
  {
    colorLetter: 'r',
    min: 0,
    max: 255,
    step: 1,
  },
  {
    colorLetter: 'g',
    min: 0,
    max: 255,
    step: 1,
  },
  {
    colorLetter: 'b',
    min: 0,
    max: 255,
    step: 1,
  },
  {
    colorLetter: 'h',
    min: 0,
    max: 360,
    step: 1,
  },
  {
    colorLetter: 's',
    min: 0,
    max: 100,
    step: 1,
  },
  {
    colorLetter: 'l',
    min: 0,
    max: 100,
    step: 1,
  },
];

export default function AdaptedInput(props: IAdapedInput) {
  const { inputLetter, handler, value } = props;

  const colorObject = colorLettersObject.find(
    (obj) => obj.colorLetter === inputLetter
  );

  return (
    <>
      {colorObject && (
        <FancyInput
          type="number"
          name={inputLetter}
          min={colorObject.min}
          max={colorObject.max}
          step={colorObject.step}
          value={value}
          handler={handler}
        />
      )}
    </>
  );
}
