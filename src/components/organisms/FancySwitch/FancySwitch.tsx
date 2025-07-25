'use client';

import { forwardRef, useEffect, useId, useState } from 'react';

import { Switch } from '@/components/molecules/Switch';
import { FancySelectWrapper } from '@/components/molecules/FancySelectWrapper';

import { TFancySwitch } from './TFancySwitch.model';
import { flipThemeType } from '@/design/designFunctions/flipThemeType';
import { FancyBox } from '@/components/atoms/FancyBox';
import { FancyBoxWrapper } from '@/components/organisms/FancySwitch/FancySwitch.style';

// --------------------------------------------------------------------------- //
// -------------------- A fancy Switch with a Label -------------------------- //
// --------------------------------------------------------------------------- //
const FancySwitch = forwardRef<HTMLInputElement, TFancySwitch>((props, ref) => {
  const {
    label,
    onChange,
    alignSwitch = 'right',
    description,
    themeType = 'primary',
    themeTypeBox = 'primary',
    layer = 0,
    layerBox = 2,
    wide = false,
    borderRadius = 'sm',
    ...rest
  } = props;
  const id = useId();
  const pickedId = props.id ? props.id : id;

  const [checked, setChecked] = useState(rest.checked || false);

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
    <FancyBoxWrapper borderRadius={borderRadius} themeType={themeTypeBox} layer={layerBox} wide={wide}>
      <FancySelectWrapper
        themeType={flipThemeType(themeTypeBox)}
        id={pickedId}
        label={label}
        description={description}
        align={'space-between'}
        alignInput={alignSwitch}
        gap={'sm'}
        onClick={handleClick}
        externalStyle={{
          alignItems: 'center',
        }}
        inputElement={
          <Switch
            themeType={themeType}
            layer={layer}
            ref={ref}
            id={pickedId}
            onChange={handleChange}
            checked={checked}
            {...rest}
          />
        }
      />
    </FancyBoxWrapper>
  );
});

export default FancySwitch;
