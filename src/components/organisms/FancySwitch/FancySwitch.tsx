'use client';

import { forwardRef, useId, useState } from 'react';

import { Switch } from '@/components/molecules/Switch';
import { FancySelectWrapper } from '@/components/molecules/FancySelectWrapper';

import { TFancySwitch } from './TFancySwitch.model';

// --------------------------------------------------------------------------- //
// -------------------- A fancy Switch with a Label -------------------------- //
// --------------------------------------------------------------------------- //
const FancySwitch = forwardRef<HTMLInputElement, TFancySwitch>((props, ref) => {
  const { label, onChange, align = 'center', alignSwitch = 'right', description, ...rest } = props;

  const [checked, setChecked] = useState(rest.checked || false);

  const id = useId();
  const pickedId = props.id ? props.id : id;

  const handleClick = () => {
    if (rest.disabled) return;
    const newChecked = !checked;
    setChecked(newChecked);
    onChange?.(newChecked);
  };

  const handleChange = (newChecked: boolean) => {
    setChecked(newChecked);
    onChange?.(newChecked);
  };

  return (
    <FancySelectWrapper
      id={pickedId}
      label={label}
      description={description}
      align={'center'}
      alignInput={alignSwitch}
      onClick={handleClick}
      externalStyle={{
        alignItems: 'center',
      }}
      inputElement={<Switch ref={ref} id={pickedId} onChange={handleChange} checked={checked} {...rest} />}
    />
  );
});

export default FancySwitch;
