import { useId, useState } from 'react';

import { TextInput } from '@/components/atoms/TextInput';
import { InputWrapper } from '@/components/molecules/InputWrapper';
import { TFancyTextInput } from '@/components/organisms/FancyTextInput/TFancyTextInput.model';

// --------------------------------------------------------------------------- //
// ----The TextInput Comonent with surrounding icon, label and underline ----- //
// --------------------------------------------------------------------------- //
export default function FancyTextInput(props: TFancyTextInput) {
  const {
    id,
    value,
    themeType = 'primary',
    layer = 2,
    placeholder,
    systemMessage,
    disabled,
    align,
    icon,
    label,
    onFocus,
    onBlur,
    transparentBackground,
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
      hasValue={!!value}
      label={label}
      disabled={disabled}
      placeholder={placeholder}
      themeType={themeType}
      layer={layer}
      align={align}
      isActive={isActive}
      icon={icon}
      systemMessage={systemMessage}
      transparentBackground={transparentBackground}
      InputElement={
        <TextInput
          id={usedId}
          value={value}
          align={align}
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
