'use client';

import { forwardRef, useId, useState } from 'react';

import { RawCheckbox } from '@/components/atoms/RawCheckbox';
import { FancySelectWrapper } from '@/components/molecules/FancySelectWrapper';

import { TFancyCheckbox } from './TFancyCheckbox.model';

// --------------------------------------------------------------------------- //
// -------------------- A simple Checkbox with a Label ----------------------- //
// --------------------------------------------------------------------------- //
const FancyCheckbox = forwardRef<HTMLInputElement, TFancyCheckbox>((props, ref) => {
  const { label, onChange, align = 'center', alignCheckbox = 'left', description, ...rest } = props;

  const [checked, setChecked] = useState(false);

  const id = useId();
  const pickedId = props.id ? props.id : id;

  const hanldeClick = () => {
    setChecked(!checked);
  };

  return (
    <FancySelectWrapper
      id={pickedId}
      label={label}
      description={description}
      align={align}
      alignInput={alignCheckbox}
      onClick={hanldeClick}
      inputElement={<RawCheckbox id={pickedId} ref={ref} onChange={onChange} checked={checked} {...rest} />}
    />
  );
});

export default FancyCheckbox;
