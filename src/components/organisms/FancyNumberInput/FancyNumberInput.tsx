import { useId, useState } from 'react';

import NumberInput from '@/components/atoms/NumberInput/NumberInput';
import InputWrapper from '@/components/molecules/InputWrapper/InputWrapper';
import { TInputWrapperUserInputProps } from '@/components/molecules/InputWrapper/TInputWrapper.model';
import { TNumberInputWithNativeAttrs } from '@/components/atoms/NumberInput/TNumberInput.moedel';

type IFancyNumberInput = TNumberInputWithNativeAttrs & TInputWrapperUserInputProps & { autoWidth?: boolean };

// --------------------------------------------------------------------------- //
// ----The NumberInput Comonent with surrounding icon, label and underline --- //
// --------------------------------------------------------------------------- //
export default function FancyNumberInput(props: IFancyNumberInput) {
  const {
    value,
    label,
    icon,
    disabled,
    systemMessage,
    align,
    id,
    themeType,
    layer,
    autoWidth,
    placeholder,
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
      hasValue={!!((value === 0 ? undefined : value) || value === 0)} // 0 is a valid value for a number input
      label={label}
      disabled={disabled}
      align={align}
      placeholder={placeholder}
      isActive={isActive}
      icon={icon}
      autoWidth={autoWidth}
      systemMessage={systemMessage}
      themeType={themeType}
      layer={layer}
      transparentBackground={transparentBackground}
      InputElement={
        <NumberInput
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
          autoWidth={autoWidth}
          {...inputProps}
        />
      }
    />
  );
}
