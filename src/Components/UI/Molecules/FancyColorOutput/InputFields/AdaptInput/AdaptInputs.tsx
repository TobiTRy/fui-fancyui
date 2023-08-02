import React from 'react';
import { FancyNumberInput } from '../../../../Organisms/FancyNumberInput';

//the attribiutes for each color input
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

// --------------------------------------------------------------------------- //
// --- The AdaptInputs Component creates for each color a specific input ----- //
// --------------------------------------------------------------------------- //
interface IAdapedInput {
  inputLetter: string;
  value: number;
  ariaLabel?: string;
  handler: () => void;
}
export default function AdaptInputs(props: IAdapedInput) {
  const { inputLetter, handler, value, ariaLabel } = props;

  //find the specific color object for the input (like: r)
  const colorObject = colorLettersObject.find((obj) => obj.colorLetter === inputLetter);

  return (
    <>
      {colorObject && (
        <FancyNumberInput
          align="center"
          ariaLabel={ariaLabel}
          name={inputLetter}
          minValue={colorObject.min}
          maxValue={colorObject.max}
          step={colorObject.step}
          value={value.toString()}
          handler={handler}
        />
      )}
    </>
  );
}
