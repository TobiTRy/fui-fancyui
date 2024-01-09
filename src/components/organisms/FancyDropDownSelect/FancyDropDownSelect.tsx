import { useId, useState } from 'react';

import { InputWrapper } from '@/components/molecules/InputWrapper';
import DropDownSelect from '@/components/atoms/DropDownSelect/DropDownSelect';
import { TInputWrapperUserInputProps } from '@/components/molecules/InputWrapper/TInputWrapper.model';
import { TDropDownSelectWithNativeAttrs } from '@/components/atoms/DropDownSelect/TDropDownSelect.model';

export type IFancyDropDownSelect = Omit<TInputWrapperUserInputProps, 'InputElement'> & TDropDownSelectWithNativeAttrs;

// --------------------------------------------------------------------------- //
// ----The Dropdown Comonent with surrounding icon, label and underline ------ //
// --------------------------------------------------------------------------- //
export default function FancyDropDownSelect(props: IFancyDropDownSelect) {
  const {
    id,
    value,
    placeholder,
    disabled,
    align,
    icon,
    label,
    systemMessage,
    themeType,
    layer,
    onFocus,
    onBlur,
    transparentBackground,
    ...inputProps
  } = props;

  //the states for the value and the activity of the input
  const [isActive, setIsActive] = useState(false);

  // if no id is provided, generate a random one
  const useid = useId();
  const usedId = id ? id : useid;

  return (
    <InputWrapper
      id={usedId}
      placeholder={placeholder}
      themeType={themeType}
      layer={layer}
      hasValue={!!value}
      label={label}
      disabled={disabled}
      align={align}
      isActive={isActive}
      icon={icon}
      systemMessage={systemMessage}
      transparentBackground={transparentBackground}
      InputElement={
        <DropDownSelect
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
