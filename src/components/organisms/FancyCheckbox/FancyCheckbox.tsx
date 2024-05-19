import { forwardRef, useId } from 'react';

import { RawCheckbox } from '@/components/atoms/RawCheckbox';
import { FancySelectWrapper } from '@/components/molecules/FancySelectWrapper';

import { TFancyCheckbox } from './TFancyCheckbox.model';

// --------------------------------------------------------------------------- //
// -------------------- A simple Checkbox with a Label ----------------------- //
// --------------------------------------------------------------------------- //
const FancyCheckbox = forwardRef<HTMLInputElement, TFancyCheckbox>((props, ref) => {
  const { label, onChange, defaultChecked, align = 'center', alignCheckbox = 'left', description, ...rest } = props;

  const id = useId();
  const pickedId = props.id ? props.id : id;

  return (
    <FancySelectWrapper
      id={pickedId}
      label={label}
      description={description}
      align={align}
      alignInput={alignCheckbox}
      inputElement={
        <RawCheckbox id={pickedId} ref={ref} onChange={onChange} defaultChecked={defaultChecked} {...rest} />
      }
    />
  );
});

export default FancyCheckbox;
