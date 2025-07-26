'use client';

import { forwardRef, useId } from 'react';

import { FancySelectWrapper } from '@/components/molecules/FancySelectWrapper';
import { Switch } from '@/components/molecules/Switch';

import { FancyBoxWrapper } from '@/components/organisms/FancySwitch/FancySwitch.style';
import { flipThemeType } from '@/design/designFunctions/flipThemeType';
import { TFancySwitch } from './TFancySwitch.model';

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
    checked: checkedProp,
    ...rest
  } = props;
  const id = useId();
  const pickedId = props.id ? props.id : id;

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
        disabled={rest.disabled}
        externalStyle={{
          alignItems: 'center',
        }}
        inputElement={
          <Switch
            ref={ref}
            themeType={themeType}
            layer={layer}
            id={pickedId}
            onChange={onChange}
            checked={checkedProp}
            {...rest}
          />
        }
      />
    </FancyBoxWrapper>
  );
});

export default FancySwitch;
