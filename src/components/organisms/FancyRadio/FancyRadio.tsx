import React, { useId } from 'react';

import { FancySelectWrapper } from '@/components/molecules/FancySelectWrapper';
import { RawRadio } from '@/components/atoms/RawRadio';
import { TFancyRadio } from './FancyRadio.model';
import { getOpositMainThemeType } from '@/design/designFunctions/getOpositMainThemeType';

// --------------------------------------------------------------------------- //
// --- The FancyRadio is a RadioInput with a Label and description porp   ---- //
// --------------------------------------------------------------------------- //
const FancyRadio = React.forwardRef<HTMLDivElement, TFancyRadio>((props, ref) => {
  const {
    align = 'left',
    alignInput,
    label,
    description,
    externalStyle,
    checked,
    id: idExternal,
    name,
    value,
    themeType = 'primary',
    layer = 2,
    layerTitle = 0,
    layerDescription = 2,
    ...HTMLProps
  } = props;

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
        themeType={getOpositMainThemeType(themeType)}
        layer={layerTitle}
        layerDescription={layerDescription}
        inputElement={
          <RawRadio
            themeType={themeType}
            layer={layer}
            name={name}
            checked={checked}
            value={value}
            id={pickedId}
            readOnly
          />
        }
      />
    </div>
  );
});

export default FancyRadio;
