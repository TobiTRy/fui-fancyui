import { forwardRef, useId, useState } from 'react';
import RawTextArea from '@/components/atoms/RawTextArea/RawTextArea';
import { InputWrapper } from '@/components/molecules/InputWrapper';
import { TFancyTextArea } from '@/components/organisms/FancyTextArea/FancyTextArea.model';

// --------------------------------------------------------------------------- //
// ---------- A FancyTextArea with a Background underline and Icon  ---------- //
// --------------------------------------------------------------------------- //
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
