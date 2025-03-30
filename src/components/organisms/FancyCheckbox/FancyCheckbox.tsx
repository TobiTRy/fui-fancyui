'use client';
import { forwardRef, useId, useRef, useState } from 'react';

import { RawCheckbox } from '@/components/atoms/RawCheckbox';
import { FancySelectWrapper } from '@/components/molecules/FancySelectWrapper';
import { useMergeRefs } from '@/utils/hooks/useMergeRefs';

import { TFancyCheckbox } from './TFancyCheckbox.model';

// --------------------------------------------------------------------------- //
// -------------------- A simple Checkbox with a Label ----------------------- //
// --------------------------------------------------------------------------- //
const FancyCheckbox = forwardRef<HTMLInputElement, TFancyCheckbox>((props, ref) => {
  const { label, onChange, align = 'center', alignCheckbox = 'left', description, ...rest } = props;
  const checkBoxRef = useRef<HTMLInputElement>(null);
  // Merge the forwarded ref and local ref
  const mergedRef = useMergeRefs([ref, checkBoxRef]);

  const [checked, setChecked] = useState(false);

  const id = useId();
  const pickedId = props.id ? props.id : id;

  const hanldeClick = () => {
    setChecked(!checked);
    checkBoxRef.current?.click();
  };

  return (
    <FancySelectWrapper
      id={pickedId}
      label={label}
      description={description}
      align={align}
      alignInput={alignCheckbox}
      onClick={hanldeClick}
      inputElement={<RawCheckbox id={pickedId} ref={mergedRef} onChange={onChange} checked={checked} {...rest} />}
    />
  );
});

export default FancyCheckbox;
