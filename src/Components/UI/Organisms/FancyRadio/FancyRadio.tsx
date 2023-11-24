import React, { useId } from 'react';

import FancySelectWrapper from '@/Components/UI/Molecules/FancySelectWrapper/FancySelectWrapper';
import RawRadio from '@/Components/UI/Atoms/RawRadio/RawRadio';

type TFancyRadioProps = Omit<React.ComponentProps<typeof FancySelectWrapper>, 'inputElement'> & React.ComponentProps<typeof RawRadio>;

const FancyRadio = React.forwardRef<HTMLDivElement, TFancyRadioProps>((props, ref) => {
  const { align, alignInput, label, description, externalStyle, checked, id: idExternal, name, value, ...HTMLProps } = props;
  const id = useId();

  const pickedId = idExternal ? idExternal : id;

  return (
    <div ref={ref} {...HTMLProps}>
      <FancySelectWrapper
        externalStyle={externalStyle}
        id={pickedId}
        label={label}
        description={description}
        align={align}
        alignInput={alignInput}
        inputElement={<RawRadio name={name} checked={checked} value={value} id={pickedId} />}
      />
    </div>
  );
});

export default FancyRadio;
