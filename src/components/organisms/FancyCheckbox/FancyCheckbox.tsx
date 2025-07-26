'use client';
import { forwardRef, useId } from 'react';

import { RawCheckbox } from '@/components/atoms/RawCheckbox';
import { FancySelectWrapper } from '@/components/molecules/FancySelectWrapper';

import { TFancyCheckbox } from './TFancyCheckbox.model';

// --------------------------------------------------------------------------- //
// -------------------- A simple Checkbox with a Label ----------------------- //
// --------------------------------------------------------------------------- //
const FancyCheckbox = forwardRef<HTMLInputElement, TFancyCheckbox>((props, ref) => {
  const { label, onChange, align = 'center', alignCheckbox = 'left', description, checked, ...rest } = props;
  const id = useId();
  const pickedId = props.id ? props.id : id;

  return (
    <FancySelectWrapper
      id={pickedId}
      label={label}
      description={description}
      align={align}
      alignInput={alignCheckbox}
      disabled={rest.disabled}
      inputElement={<RawCheckbox ref={ref} id={pickedId} onChange={onChange} checked={checked} {...rest} />}
    />
  );
});

export default FancyCheckbox;
