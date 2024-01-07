import { FancySVGAtom } from '@/components/atoms/FancySVGAtom';
import { InputUnderline } from '@/components/atoms/InputUnderline';

import { SystemMessage } from '@/components/atoms/SystemMessage/';
import { LabeledInput } from '@/components/molecules/LabeledInput';
import { getOpositMainThemeType } from '@/design/designFunctions/getOpositMainThemeType';
import { clampLayer } from '@/utils/functions/clampLayer';
import { IInputWrapper } from './IInputWrapper.model';
import { InputContainer, StyledInputWrapper, SystemMessageWrapper, iconStyle } from './InputWrapper.style';

// --------------------------------------------------------------------------- //
// ------ The Wrapper for the inputs that give him some extra features  ------ //
// ------------------ like a Label icon errormessage ------------------------- //
export default function InputWrapper(props: IInputWrapper) {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    id,
    value,
    isActive,
    disabled,
    InputElement,
    systemMessage,
    icon,
    label,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    align,
    underline = true,
    autoWidth,
    placeholder,
    layer = 3,
    themeType = 'primary',
  } = props;

  // Render the InputWrapper component with the appropriate props
  return (
    <StyledInputWrapper disabled={disabled} $autoWidth={autoWidth}>
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
      <InputContainer $givePadding={Boolean(label)} $themeType={themeType} $layer={layer}>
        <LabeledInput
          themeType={themeType}
          inputElement={InputElement}
          label={label}
          placeholder={placeholder}
          systemMessageType={systemMessage?.type}
          layer={layer}
          value={value}
        />
        {/* Render the underline for the input field if the underline prop is true */}
        {underline && (
          <InputUnderline
            systemMessageType={systemMessage?.type}
            themeType={themeType}
            layer={clampLayer(layer + 2)}
            isActive={isActive}
          />
        )}
      </InputContainer>
      {/* Render the error message if an errorMessage prop exists */}
      {systemMessage && (
        <SystemMessageWrapper>
          <SystemMessage systemMessageState={systemMessage.type}>{systemMessage.message}</SystemMessage>
        </SystemMessageWrapper>
      )}
    </StyledInputWrapper>
  );
}
