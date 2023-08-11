import React from 'react';
import { css } from 'styled-components';

import { ErrorMessage, StyledInputWrapper, InputContainer } from './InputWrapper.style';
import UnderLine from '../../Atoms/InputUnderline/InputUnderline';

import FancySVGAtom from '../../Atoms/FancySVGAtom/FancySVGAtom';
import { spacing } from '../../Design/design';
import { AnimatedInputLabel } from '../../Atoms/AnimatedLabel/AnimatedLabel.style';

const iconStyle = css`
  margin-right: ${spacing.xs + 2 + 'px'};
  margin-bottom: 2px;
  transition: 0.5s;
  align-self: flex-end;
`;

export type IInputWrapperUserInputProps = Omit<IInputWrapper, 'children' | 'id' | 'underline' | 'autoWidth' | 'value'>;

export interface IInputWrapper {
  id: string;
  isActiv?: boolean
  label?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  errorMessage?: string;
  icon?: JSX.Element;
  value?: string | number;
  align?: 'left' | 'center';
  autoWidth?: boolean;
  underline?: boolean;
}
export default function InputWrapper(props: IInputWrapper) {
  const { id, isActiv, disabled, children, errorMessage, icon, label, align, underline = true, autoWidth } = props;

  return (
    <StyledInputWrapper disabled={disabled} $autoWidth={autoWidth}>
      {icon && (
        <FancySVGAtom isPassive={false} externalStyle={iconStyle} size="large" isActive={isActiv}>
          {icon}
        </FancySVGAtom>
      )}
      <InputContainer $givePadding={Boolean(label)}>
        {children}
        {/* the label for the input field it shows when a label prop exists*/}
        {label && (
          <AnimatedInputLabel htmlFor={id} $align={align} $disabledAndSelected={Boolean(disabled) && Boolean(props.value)}>
            {label}
          </AnimatedInputLabel>
        )}
        {underline && <UnderLine $errorMessage={errorMessage} $isActive={isActiv} />}
      </InputContainer>
      {/* // ---------if a errorMessage prop exists this message will shown------------- // */}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      {/* // --------------------------------------------------------------------------- // */}
    </StyledInputWrapper>
  );
}
