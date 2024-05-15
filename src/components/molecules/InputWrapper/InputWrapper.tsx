import { FancySVGAtom } from '@/components/atoms/FancySVGAtom';
import { css } from 'styled-components';

import { FancyBox } from '@/components/atoms/FancyBox';
import { LabeledInput } from '@/components/molecules/LabeledInput';
import { getOpositMainThemeType } from '@/design/designFunctions/getOpositMainThemeType';
import { themeStore } from '@/design/theme/themeStore';
import {
  StyledInputWrapper,
  WrapperSystemMessageAndInput,
  generateIconStyle,
  generateInputContainerStyle,
} from './InputWrapper.style';
import { TInputWrapper } from './TInputWrapper.model';

// --------------------------------------------------------------------------- //
// ------ The Wrapper for the inputs that give him some extra features  ------ //
// ------------------ like a Label icon errormessage ------------------------- //
export default function InputWrapper(props: TInputWrapper) {
  const {
    id,
    hasValue,
    isActive = false,
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
    themeType = 'primary',
    transparentBackground,
    externalStyle,
    labelVariant,
  } = props;

  const theme = themeStore((state) => state.theme);

  // Render the InputWrapper component with the appropriate props
  return (
    <StyledInputWrapper disabled={disabled} $autoWidth={autoWidth}>
      <FancyBox
        themeType={transparentBackground ? 'transparent' : themeType}
        layer={layer}
        outlined={outlined}
        outlinedBackgroundStrength={outlinedBackgroundStrength}
        externalStyle={css`
          ${generateInputContainerStyle(!!label, isActive, theme)}
          ${externalStyle}
        `}
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
        <WrapperSystemMessageAndInput>
          <LabeledInput
            id={id}
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
        </WrapperSystemMessageAndInput>
        {/* Render the underline for the input field if the underline prop is true */}
      </FancyBox>
    </StyledInputWrapper>
  );
}
