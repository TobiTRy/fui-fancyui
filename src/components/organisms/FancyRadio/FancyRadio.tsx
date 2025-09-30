'use client';

import React, { ChangeEvent, useEffect, useId, useRef, useState } from 'react';

import { FancySelectWrapper } from '@/components/molecules/FancySelectWrapper';
import { RawRadio } from '@/components/atoms/RawRadio';
import { TFancyRadio } from './FancyRadio.model';
import { getOpositMainThemeType } from '@/design/designFunctions/getOpositMainThemeType';

// --- //
// ----- The FancyRadio is a RadioInput with a Label and description prop   ---- --- //
// --- //
const FancyRadio = React.forwardRef<HTMLInputElement, TFancyRadio>((props, ref) => {
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
    className,
    onChange,
    ...HTMLProps
  } = props;
  const id = useId();
  const pickedId = idExternal || id;
  const [checkedState, setCheckedState] = useState(checked || false);

  const inputRef = useRef<HTMLInputElement | null>(null);

  // Merge refs (the one from forwardRef and our local one)
  const mergeRefs = (element: HTMLInputElement) => {
    if (typeof ref === 'function') {
      ref(element);
    } else if (ref) {
      ref.current = element;
    }
    inputRef.current = element;
  };

  useEffect(() => {
    if (checked !== undefined) {
      setCheckedState(checked);
    }
  }, [checked]);

  const handleWrapperClick = () => {
    if (inputRef.current && !inputRef.current.disabled) {
      inputRef.current.click();
    }
  };

  const handleChanged = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckedState(e.target.checked);
    onChange?.(e);
  };

  return (
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
      className={className}
      onClick={handleWrapperClick}
      inputElement={
        <RawRadio
          ref={mergeRefs}
          themeType={themeType}
          layer={layer}
          name={name}
          checked={checkedState}
          value={value}
          id={pickedId}
          onChange={handleChanged}
          {...HTMLProps}
        />
      }
    />
  );
});

// Display name for debugging purposes
FancyRadio.displayName = 'FancyRadio';

export default FancyRadio;
