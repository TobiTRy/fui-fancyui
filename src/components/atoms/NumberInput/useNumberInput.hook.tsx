// useNumberInput.ts
import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';
import { TNumberInputWithNativeAttrs } from '@/components/atoms/NumberInput/TNumberInput.model';

interface UseNumberInputReturn {
  inputValue: string | null;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
}

export const useNumberInput = (props: TNumberInputWithNativeAttrs): UseNumberInputReturn => {
  const { value, onChange, min, max, decimalPlaces, step = 1 } = props;
  const [inputValue, setInputValue] = useState<string | null>(value ? value.toString() : null);
  const getDecimalPlaces = decimalPlaces || step.toString().split('.')[1]?.length || 0;

  // Set the initial value
  useEffect(() => {
    if (value !== undefined) {
      setInputValue(value.toString());
    }
  }, [value]);

  // Handle the change of the input value
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    // Remove all but the first two decimal points
    const splitPoints = newValue.split('.').slice(0, 2).join('.');
    // Remove all non-numeric characters
    const sanitizedValue = splitPoints.replace(/[^\d.]/g, '');
    // fit max decimal places
    const splitValue = sanitizedValue.split('.');
    if (splitValue[1]?.length > getDecimalPlaces) {
      splitValue[1] = splitValue[1].slice(0, getDecimalPlaces);
    }

    const newCalcValue = Array.isArray(splitValue) && splitValue.length === 2 ? splitValue.join('.') : sanitizedValue;

    updateValue(newCalcValue, e);
  };

  // Handle the arrow up and down keys to increase or decrease the value
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      e.preventDefault();

      // If inputValue is null, treat it as 0
      let currentValue = parseFloat(inputValue || '0');

      // Handle the case where currentValue is NaN (in case inputValue is an empty string or just a decimal point)
      if (isNaN(currentValue)) {
        currentValue = 0;
      }

      let newValue = e.key === 'ArrowUp' ? currentValue + step : currentValue - step;

      // Round to the appropriate number of decimal places
      newValue = Number(newValue.toFixed(getDecimalPlaces));

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
