import { FancySVGAtom } from '@/components/atoms/FancySVGAtom';

import { SystemMessage } from '@/components/atoms/SystemMessage/';
import { LabeledInput } from '@/components/molecules/LabeledInput';
import { getOpositMainThemeType } from '@/design/designFunctions/getOpositMainThemeType';
import { TInputWrapper } from './TInputWrapper.model';
import {
  generateInputContainerStyle,
  StyledInputWrapper,
  SystemMessageWrapper,
  generateIconStyle,
} from './InputWrapper.style';
import { FancyBox } from '@/components/atoms/FancyBox';
import { css } from 'styled-components';

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
    externalStyle,
  } = props;

  // Render the InputWrapper component with the appropriate props
  return (
    <StyledInputWrapper disabled={disabled} $autoWidth={autoWidth}>
      <FancyBox
        themeType={transparentBackground ? 'transparent' : themeType}
        layer={layer}
        externalStyle={css`
          ${generateInputContainerStyle(!!label)}
          ${externalStyle}
        `}
      >
        {icon && (
          <FancySVGAtom
            themeType={getOpositMainThemeType(themeType)}
            layer={layer}
            isPassive={false}
            externalStyle={generateIconStyle(!!label)}
            size="xs"
            isActive={isActive}
          >
            {icon}
          </FancySVGAtom>
        )}
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <LabeledInput
            id={id}
            align={align}
            themeType={themeType}
            label={label}
            placeholder={placeholder}
            systemMessageType={systemMessage?.type}
            layer={layer}
            hasValue={hasValue}
            underline={underline}
            isActive={isActive}
            inputElement={InputElement}
          />
          {/* Render the error message if an errorMessage prop exists */}
          {systemMessage && (
            <SystemMessageWrapper>
              <SystemMessage systemMessageState={systemMessage.type}>{systemMessage.message}</SystemMessage>
            </SystemMessageWrapper>
          )}
        </div>
        {/* Render the underline for the input field if the underline prop is true */}
      </FancyBox>
    </StyledInputWrapper>
  );
}
