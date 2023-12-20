// useNumberInput.ts
import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';
import { INumberInput } from './NumberInput';

interface UseNumberInputReturn {
  inputValue: string | null;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
}

export const useNumberInput = (props: INumberInput): UseNumberInputReturn => {
  const { value, onChange, min, max, step = 1 } = props;
  const [inputValue, setInputValue] = useState<string | null>(value ? value.toString() : null);

  // Set the initial value
  useEffect(() => {
    if (value !== undefined) {
      setInputValue(value.toString());
    }
  }, [value]);

  // Handle the change of the input value
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    // Remove all non-numeric characters
    const sanitizedValue = newValue.replace(/[^\d]/g, '');

    updateValue(sanitizedValue, e);
  };

  // Handle the arrow up and down keys to increase or decrease the value
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      e.preventDefault();

      const currentValue = Number(inputValue) || 0;
      let newValue = e.key === 'ArrowUp' ? currentValue + step : currentValue - step;

      // Round to the number of decimal places in `step`
      const numDecimalPlaces = step.toString().split('.')[1]?.length || 0;
      newValue = Number(newValue.toFixed(numDecimalPlaces));

      // Update the fake event object to pass to the onChange handler
      const fakeEvent = {
        target: {
          value: newValue.toString(),
        },
      } as ChangeEvent<HTMLInputElement>;

      updateValue(newValue.toString(), fakeEvent);
    }
  };

  // Update the value and call the onChange handler
  const updateValue = (newValue: string, e?: ChangeEvent<HTMLInputElement>) => {
    let adjustedValue = newValue;
    // Check if the value is within the min and max range
    if (max !== undefined && Number(newValue) > Number(max)) {
      adjustedValue = max.toString();
    } else if (min !== undefined && Number(newValue) < Number(min)) {
      adjustedValue = min.toString();
    }

    // Update the state
    setInputValue(adjustedValue);

    // Call the onChange handler if provided
    if (onChange && e) {
      e.target.value = adjustedValue;
      onChange(e);
    }
  };
  return { inputValue, handleChange, handleKeyDown };
};
