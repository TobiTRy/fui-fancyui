import { FancySVGAtom } from '@/components/atoms/FancySVGAtom';

import { LabeledInput } from '@/components/molecules/LabeledInput';
import { getOpositMainThemeType } from '@/design/designFunctions/getOpositMainThemeType';
import { ExtendedFancyBox, generateIconStyle } from './InputWrapper.style';
import { TInputWrapper } from './TInputWrapper.model';

// --------------------------------------------------------------------------- //
// ------ The Wrapper for the inputs that give him some extra features  ------ //
// ------------------ like a Label icon errormessage ------------------------- //
export default function InputWrapper(props: TInputWrapper) {
  const {
    id,
    hasValue,
    isActive = false,
    isTextArea,
    disabled,
    InputElement,
    systemMessage,
    icon,
    label,
    align,
    underline = true,
    autoWidth,
    placeholder,
    layer = 2,
    outlined,
    outlinedBackgroundStrength,
    outlinedRemoveBorder,
    themeType = 'primary',
    transparentBackground,
    externalStyle,
    focusStyle = true,
    labelVariant,
    className,
  } = props;

  // Render the InputWrapper component with the appropriate props
  return (
    <ExtendedFancyBox
      className={className}
      themeType={transparentBackground ? 'transparent' : themeType}
      layer={layer}
      outlined={outlined}
      outlinedBackgroundStrength={outlinedBackgroundStrength}
      outlinedRemoveBorder={outlinedRemoveBorder}
      $hasLabel={!!label}
      $isActive={isActive}
      $boxShadow={focusStyle}
      $autoWidth={autoWidth}
      $isDisabled={disabled}
      externalStyle={externalStyle}
    >
      {icon && (
        <FancySVGAtom
          themeType={getOpositMainThemeType(themeType)}
          layer={layer}
          isPassive={false}
          externalStyle={generateIconStyle(!!label)}
          systemMessage={systemMessage}
          sizeC="xs"
          isActive={isActive}
        >
          {icon}
        </FancySVGAtom>
      )}

      <LabeledInput
        id={id}
        isTextArea={isTextArea}
        align={align}
        themeType={themeType}
        label={label}
        hasPlaceholder={!!placeholder}
        systemMessageType={systemMessage}
        layer={layer}
        hasValue={hasValue}
        underline={underline}
        isActive={isActive}
        inputElement={InputElement}
        labelVariant={labelVariant ?? 'animated'}
      />
    </ExtendedFancyBox>
  );
}
