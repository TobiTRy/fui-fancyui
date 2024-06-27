import RawTextArea, { TRawTextAreaWithHTMLAttrs } from '@/components/atoms/RawTextArea/RawTextArea';
import { InputWrapper, TInputWrapperUserInputProps } from '@/components/molecules/InputWrapper';

import { forwardRef, useId, useState } from 'react';

type TFancyTextArea = Omit<TInputWrapperUserInputProps, 'InputElement'> & TRawTextAreaWithHTMLAttrs;

const FancyTextArea = forwardRef<HTMLTextAreaElement, TFancyTextArea>((props, ref) => {
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
    underline,
    onBlur,
    outlined,
    outlinedBackgroundStrength,
    outlinedRemoveBorder,
    transparentBackground,
    className,
    ...inputProps
  } = props;

  //the states activity of the input
  const [isActive, setIsActive] = useState(false);

  // if no id is provided, generate a random one
  const useid = useId();
  const usedId = id ? id : useid;

  return (
    // <LabeledInput
    //   label='Moooiin'
    //   inputElement={<RawTextArea/>}
    // />

    <InputWrapper
      id={usedId}
      isTextArea
      hasValue={!!value}
      label={label}
      disabled={disabled}
      placeholder={placeholder}
      themeType={themeType}
      layer={layer}
      align={align}
      isActive={isActive}
      underline={underline}
      icon={icon}
      className={className}
      systemMessage={systemMessage}
      transparentBackground={transparentBackground}
      outlined={outlined}
      outlinedBackgroundStrength={outlinedBackgroundStrength}
      outlinedRemoveBorder={outlinedRemoveBorder}
      InputElement={
        <RawTextArea
          ref={ref}
          id={usedId}
          value={value}
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
});

export default FancyTextArea;
