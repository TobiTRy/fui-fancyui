import React, { useEffect, useState } from 'react';
import { css } from 'styled-components';

import { ErrorMessage, StyledInputWrapper, InputContainer } from './InputWrapper.style';
import FancyInputUnderline from '../../Atoms/InputUnderline/InputUnderline';

import FancySVGAtom from '../../Atoms/FancySVGAtom/FancySVGAtom';
import { spacing } from '../../Design/design';
import AnimatedInputLabel from '../../Atoms/AnimatedLabel/AnimatedInputLabel';
import { TRawInputAlign } from '../../Atoms/RawInput/RawInput';
import { TUiColorsType } from '../../Design/color/designColor';
import { TLayer } from '../../Design/color/generateColorSteps';
import calcColorState from '../../Design/color/calcColorState';

// Define the styles for the icon
const iconStyle = css`
  margin-right: ${spacing.xs + 2 + 'px'};
  margin-bottom: 2px;
  transition: 0.5s;
  align-self: flex-end;
`;

// Define the interface for the color state

// Define the props for the InputWrapper component
export type IInputWrapperUserInputProps = Omit<IInputWrapper, 'children' | 'id' | 'underline' | 'autoWidth' | 'value'>;
export interface IInputWrapper {
  id: string;
  isActive?: boolean;
  label?: string;
  disabled?: boolean;
  InputElement?: React.ReactNode;
  errorMessage?: string;
  icon?: JSX.Element;
  value?: string | number | readonly string[] | undefined;
  themeType?: keyof TUiColorsType;
  layer?: TLayer;
  align?: TRawInputAlign;
  autoWidth?: boolean;
  underline?: boolean;
  placeholder?: string;
}
// --------------------------------------------------------------------------- //
// ------ The Wrapper for the inputs that give him some extra features  ------ //
// ------------------ like a Label icon errormessage ------------------------- //
export default function InputWrapper(props: IInputWrapper) {
  const {
    id,
    value,
    isActive,
    disabled,
    InputElement,
    errorMessage,
    icon,
    label,
    align,
    underline = true,
    autoWidth,
    placeholder,
    layer = 4,
    themeType = 'secondary',
  } = props;
  const [isInitial, setIsInitial] = useState(false);

  // Calculate the color state for the label and underline
  const colorStateLabel = calcColorState({ type: 'label', isActive, errorMessage, value, placeholder });
  const colorStateUnderline = calcColorState({ type: 'underline', isActive, errorMessage, value, placeholder });

  // Set the initial state of the input field
  useEffect(() => {
    if (isActive) setIsInitial(true);
  }, [isActive]);

  // Render the InputWrapper component with the appropriate props
  return (
    <StyledInputWrapper disabled={disabled} $autoWidth={autoWidth}>
      {icon && (
        <FancySVGAtom themeType={themeType} layer={layer} isPassive={false} externalStyle={iconStyle} size="lg" isActive={isActive}>
          {icon}
        </FancySVGAtom>
      )}
      <InputContainer $givePadding={Boolean(label)} $themeType={themeType} $layer={layer}>
        {InputElement}
        {/* Render the label for the input field if a label prop exists */}
        {label && (
          <AnimatedInputLabel
            htmlFor={id}
            $align={align}
            $themeType={themeType}
            $layer={layer}
            $moveUp={
              Boolean((isInitial && value === 0 ? undefined : value) || Boolean(isInitial && value === 0)) ||
              isActive ||
              Boolean(placeholder)
            }
            $colorState={colorStateLabel}
          >
            {label}
          </AnimatedInputLabel>
        )}
        {/* Render the underline for the input field if the underline prop is true */}
        {underline && (
          <FancyInputUnderline
            colorState={colorStateUnderline === 'error' ? 'error' : 'active'}
            themeType={themeType}
            layer={layer}
            isActive={isActive}
          />
        )}
      </InputContainer>
      {/* Render the error message if an errorMessage prop exists */}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </StyledInputWrapper>
  );
}
