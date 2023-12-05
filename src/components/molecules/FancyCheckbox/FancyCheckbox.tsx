import { useId } from 'react';

import { RawCheckbox } from '@/components/atoms/RawCheckbox';
import { FancySelectWrapper } from '@/components/molecules/FancySelectWrapper';

import { IFancyCheckboxProps } from './FancyCheckbox.model';

// --------------------------------------------------------------------------- //
// -------------------- A simple Checkbox with a Label ----------------------- //
// --------------------------------------------------------------------------- //
export default function FancyCheckbox(props: IFancyCheckboxProps) {
  const { label, onChange, defaultChecked, align, alignCheckbox, description, ...rest } = { ...defaultProps, ...props };

  const id = useId();

  const pickedId = props.id ? props.id : id;

  return (
    <FancySelectWrapper
      id={pickedId}
      label={label}
      description={description}
      align={align}
      alignInput={alignCheckbox}
      inputElement={<RawCheckbox id={pickedId} onChange={onChange} defaultChecked={defaultChecked} {...rest} />}
    />
  );
}

// the default props of the component
const defaultProps: IFancyCheckboxProps = {
  align: 'center',
  alignCheckbox: 'left',
};
