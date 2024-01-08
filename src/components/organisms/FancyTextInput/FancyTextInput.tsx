import { useId, useState } from 'react';

import TextInput, { ITextInputProps } from '@/components/atoms/TextInput/TextInput';
import { TInputWrapperUserInputProps } from '@/components/molecules/InputWrapper/TInputWrapper.model';
import InputWrapper from '@/components/molecules/InputWrapper/InputWrapper';

type IFancyTextInputProps = ITextInputProps & Omit<TInputWrapperUserInputProps, 'InputElement'>;
// --------------------------------------------------------------------------- //
// ----The TextInput Comonent with surrounding icon, label and underline ----- //
// --------------------------------------------------------------------------- //
export default function FancyTextInput(props: IFancyTextInputProps) {
  const {
    id,
    value,
    activeHandler,
    themeType,
    layer,
    placeholder,
    systemMessage,
    disabled,
    align,
    icon,
    label,
    ...inputProps
  } = props;

  //the states activity of the input
  const [isActive, setIsActive] = useState(false);

  // if no id is provided, generate a random one
  const useid = useId();
  const usedId = id ? id : useid;

  // handles the focus and blur events and calls the handler from the parent
  const activeFocusHandler = (value: boolean) => {
    setIsActive(value);
    activeHandler && activeHandler(value);
  };

  return (
    <InputWrapper
      id={usedId}
      value={value}
      label={label}
      disabled={disabled}
      placeholder={placeholder}
      themeType={themeType}
      layer={layer}
      align={align}
      isActive={isActive}
      icon={icon}
      systemMessage={systemMessage}
      InputElement={
        <TextInput
          id={usedId}
          value={value}
          align={align}
          disabled={disabled}
          activeHandler={activeFocusHandler}
          placeholder={placeholder}
          {...inputProps}
        />
      }
    />
  );
}
