'use client';

import { forwardRef, useCallback } from 'react';

import { SwitchTrack, IconContainer, IconWrapper } from './Switch.style';
import { TSwitchWithNativeAttrs } from './Switch.model';

// --------------------------------------------------------------------------- //
// ---------- A basic Switch component that can be used in organisms --------- //
// --------------------------------------------------------------------------- //
const Switch = forwardRef<HTMLInputElement, TSwitchWithNativeAttrs>((props, ref) => {
  const {
    checked = false,
    onChange,
    disabled = false,
    sizeC = 'md',
    themeType = 'primary',
    layer = 0,
    icon,
    checkedIcon,
    externalStyle,
    id,
    name,
    ...inputProps
  } = props;

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;
      onChange?.(event.target.checked);
    },
    [onChange, disabled]
  );

  const hasIcons = icon || checkedIcon;

  return (
    <SwitchTrack
      $sizeC={sizeC}
      $checked={checked}
      $disabled={disabled}
      $themeType={themeType}
      $externalStyle={externalStyle}
      $layer={layer}
    >
      <input
        ref={ref}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        id={id}
        name={name}
        {...inputProps}
      />
      {hasIcons && (
        <IconContainer $sizeC={sizeC} $checked={checked}>
          {checkedIcon && <IconWrapper $checked={checked}>{checkedIcon}</IconWrapper>}
          {icon && <IconWrapper $checked={checked}>{icon}</IconWrapper>}
        </IconContainer>
      )}
    </SwitchTrack>
  );
});

export default Switch;
