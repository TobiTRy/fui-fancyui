import React, { useId } from 'react';

import FancySelectWrapper from '@/Components/UI/Molecules/FancySelectWrapper/FancySelectWrapper';
import RawRadio from '@/Components/UI/Atoms/RawRadio/RawRadio';

type TFancyRadioProps = Omit<React.ComponentProps<typeof FancySelectWrapper>, 'inputElement'> & React.ComponentProps<typeof RawRadio>;
export default function FancyRadio(props: TFancyRadioProps) {
  const { align, alignInput, label, description, ...inputProps } = props;
  const id = useId();
  
  const pickedId = props.id ? props.id : id;

  return (
    <FancySelectWrapper
      id={pickedId}
      label={label}
      description={description}
      align={align}
      alignInput={alignInput}
      inputElement={<RawRadio {...inputProps} id={pickedId} />}
    />
  );
}
