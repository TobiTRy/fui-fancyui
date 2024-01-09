import { FancySVGAtom } from '@/components/atoms/FancySVGAtom';

import { SystemMessage } from '@/components/atoms/SystemMessage/';
import { LabeledInput } from '@/components/molecules/LabeledInput';
import { getOpositMainThemeType } from '@/design/designFunctions/getOpositMainThemeType';
import { TInputWrapper } from './TInputWrapper.model';
import { InputContainer, StyledInputWrapper, SystemMessageWrapper, iconStyle } from './InputWrapper.style';
import { FancyBox } from '@/components/atoms/FancyBox';

// --------------------------------------------------------------------------- //
// ------ The Wrapper for the inputs that give him some extra features  ------ //
// ------------------ like a Label icon errormessage ------------------------- //
export default function InputWrapper(props: TInputWrapper) {
  const {
    id,
    hasValue,
    isActive,
    disabled,
    InputElement,
    systemMessage,
    icon,
    label,
    align,
    underline = true,
    autoWidth,
    placeholder,
    layer = 3,
    themeType = 'primary',
    transparentBackground,
  } = props;

  // Render the InputWrapper component with the appropriate props
  return (
    <StyledInputWrapper disabled={disabled} $autoWidth={autoWidth}>
      <FancyBox
        themeType={transparentBackground ? 'transparent' : themeType}
        layer={layer}
        externalStyle={InputContainer}
      >
        {icon && (
          <FancySVGAtom
            themeType={getOpositMainThemeType(themeType)}
            layer={layer}
            isPassive={false}
            externalStyle={iconStyle}
            size="xs"
            isActive={isActive}
          >
            {icon}
          </FancySVGAtom>
        )}
        <LabeledInput
          id={id}
          align={align}
          themeType={themeType}
          inputElement={InputElement}
          label={label}
          placeholder={placeholder}
          systemMessageType={systemMessage?.type}
          layer={layer}
          hasValue={hasValue}
          underline={underline}
          isActive={isActive}
        />
        {/* Render the underline for the input field if the underline prop is true */}
      </FancyBox>
      {/* Render the error message if an errorMessage prop exists */}
      {systemMessage && (
        <SystemMessageWrapper>
          <SystemMessage systemMessageState={systemMessage.type}>{systemMessage.message}</SystemMessage>
        </SystemMessageWrapper>
      )}
    </StyledInputWrapper>
  );
}
