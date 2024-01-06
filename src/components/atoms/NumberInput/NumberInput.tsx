import { useNumberInput } from '@/components/atoms/NumberInput/useNumberInput.hook';
import { TTextAlignLC } from '@/types/TTextAlignLC';
import { InputHTMLAttributes, useMemo } from 'react';
import StyledNumberInput from './NumberInput.styled';

export interface INumberInput extends InputHTMLAttributes<HTMLInputElement> {
  autoWidth?: boolean;
  active?: boolean;
  align?: TTextAlignLC;
  step?: number;
  decimalPlaces?: number;
  activeHandler?: (value: boolean) => void;
}
// --------------------------------------------------------------------------- //
// Advanced Text imput that acts like a number input to have more versatelity  //
// --------------------------------------------------------------------------- //
export default function NumberInput(props: INumberInput) {
  //dont remove the value/onchange else its provided in the element and you can have letters in the input

  const { value, onChange, activeHandler, align, id, autoWidth, decimalPlaces, step, min, max, ...moreHTMLProps } =
    props;

  // use the hook for the number input to handle the input
  const { inputValue, handleChange, handleKeyDown } = useNumberInput({
    value,
    onChange,
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
      type="text"
      value={inputValue !== null ? inputValue : ''}
      step={step}
      min={min}
      max={max}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      onFocus={() => activeHandler && activeHandler(true)}
      onBlur={() => activeHandler && activeHandler(false)}
      $width={inputWidth}
      $align={align}
      {...moreHTMLProps}
    />
  );
}
