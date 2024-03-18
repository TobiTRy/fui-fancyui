import { useMemo } from 'react';

import { useNumberInput } from '@/components/atoms/NumberInput/useNumberInput.hook';
import StyledNumberInput from './NumberInput.styled';
import { TNumberInput, TNumberInputNativeAttrs } from '@/components/atoms/NumberInput/TNumberInput.model';

// --------------------------------------------------------------------------- //
// Advanced Text imput that acts like a number input to have more versatelity  //
// --------------------------------------------------------------------------- //
export default function NumberInput(props: TNumberInput & TNumberInputNativeAttrs) {
  //dont remove the value/onchange else its provided in the element and you can have letters in the input
  const {
    value,
    onChange,
    onKeyDown,
    align,
    id,
    autoWidth,
    decimalPlaces,
    step,
    min,
    max,
    externalStyle,
    ...moreHTMLProps
  } = props;

  // use the hook for the number input to handle the input
  const { inputValue, handleChange, handleKeyDown } = useNumberInput({
    value,
    onChange,
    onKeyDown,
    min,
    max,
    decimalPlaces,
    step,
  });

  const inputWidth = useMemo(
    () => (autoWidth ? (inputValue ? `${inputValue.length + 1}ch` : '2ch') : '100%'),
    [inputValue, autoWidth]
  );

  return (
    <StyledNumberInput
      id={id}
      autoComplete={'off'}
      type="text"
      value={inputValue !== null ? inputValue : ''}
      step={step}
      min={min}
      max={max}
      onChange={handleChange}
      onKeyDown={(e) => {
        handleKeyDown(e);
      }}
      $externalStyle={externalStyle}
      $width={inputWidth}
      $align={align}
      {...moreHTMLProps}
    />
  );
}
