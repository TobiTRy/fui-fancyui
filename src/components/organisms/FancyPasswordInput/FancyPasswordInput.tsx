import { useId, useState } from 'react';

import { PasswordInput } from '@/components/atoms/PasswordInput';
import { InputWrapper } from '@/components/molecules/InputWrapper';

import { TFancyPasswordInput } from './TFancyPasswordInput.model';
import { getOpositMainThemeType } from '@/design/designFunctions/getOpositMainThemeType';

// --------------------------------------------------------------------------- //
// ----The PasswordInput Comonent with surrounding icon, label and underline-- //
// --------------------------------------------------------------------------- //
export default function FancyPasswordInput(props: TFancyPasswordInput) {
  const {
    id,
    value,
    placeholder,
    systemMessage,
    disabled,
    align = 'left',
    themeType = 'primary',
    layer = 2,
    icon,
    label,
    onFocus,
    underline,
    onBlur,
    transparentBackground,
    outlined,
    outlinedBackgroundStrength,
    outlinedRemoveBorder,
    className,
    ...inputProps
  } = props;

  //the states activity of the input
  const [isActive, setIsActive] = useState(false);

  // if no id is provided, generate a random one
  const useid = useId();
  const usedId = id ? id : useid;

  return (
    <InputWrapper
      id={usedId}
      themeType={themeType}
      layer={layer}
      hasValue={!!value}
      placeholder={placeholder}
      label={label}
      disabled={disabled}
      align={align}
      underline={underline}
      isActive={isActive}
      icon={icon}
      className={className}
      systemMessage={systemMessage}
      transparentBackground={transparentBackground}
      outlined={outlined}
      outlinedBackgroundStrength={outlinedBackgroundStrength}
      outlinedRemoveBorder={outlinedRemoveBorder}
      InputElement={
        <PasswordInput
          id={usedId}
          value={value}
          align={align}
          themeType={getOpositMainThemeType(themeType)}
          layer={layer}
          disabled={disabled}
          onFocus={(e) => {
            onFocus && onFocus(e);
            setIsActive(true);
          }}
          onBlur={(e) => {
            onBlur && onBlur(e);
            setIsActive(false);
          }}
          placeholder={placeholder}
          {...inputProps}
        />
      }
    />
  );
}
