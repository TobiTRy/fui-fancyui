'use client';

import { forwardRef, useId, useRef, useState } from 'react';

import { FancySelectWrapper } from '@/components/molecules/FancySelectWrapper';
import { Switch } from '@/components/molecules/Switch';

import { FancyBoxWrapper } from '@/components/organisms/FancySwitch/FancySwitch.style';
import { flipThemeType } from '@/design/designFunctions/flipThemeType';
import { useMergeRefs } from '@/utils/hooks/useMergeRefs';
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

  const checkBoxRef = useRef<HTMLInputElement>(null);
  // Merge the forwarded ref and local ref
  const mergedRef = useMergeRefs([ref, checkBoxRef]);

  const [checked, setChecked] = useState(checkedProp || false);

  const hanldeClick = () => {
    setChecked(!checked);
    checkBoxRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    onChange?.(e);
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
        onClick={hanldeClick}
        externalStyle={{
          alignItems: 'center',
        }}
        inputElement={
          <Switch
            themeType={themeType}
            layer={layer}
            ref={mergedRef}
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
