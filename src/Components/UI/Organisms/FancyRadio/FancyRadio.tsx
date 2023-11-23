import React, { useId } from 'react';

import FancySelectWrapper from '@/Components/UI/Molecules/FancySelectWrapper/FancySelectWrapper';
import RawRadio from '@/Components/UI/Atoms/RawRadio/RawRadio';

type TFancyRadioProps = Omit<React.ComponentProps<typeof FancySelectWrapper>, 'inputElement'> & React.ComponentProps<typeof RawRadio>;

const FancyRadio = React.forwardRef<HTMLDivElement, TFancyRadioProps>((props, ref) => {
  const { align, alignInput, label, description, externalStyle, ...inputProps } = props;
  const id = useId();

  const pickedId = props.id ? props.id : id;

  return (
    <FancySelectWrapper
      externalStyle={externalStyle}
      id={pickedId}
      label={label}
      description={description}
      align={align}
      alignInput={alignInput}
      inputElement={<RawRadio {...inputProps} id={pickedId} />}
    />
  );
});

export default FancyRadio;
