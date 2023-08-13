import React from 'react';
import { css } from 'styled-components';

import { ErrorMessage, StyledInputWrapper, InputContainer } from './InputWrapper.style';
import FancyInputUnderline from '../../Atoms/InputUnderline/InputUnderline';

import FancySVGAtom from '../../Atoms/FancySVGAtom/FancySVGAtom';
import { spacing } from '../../Design/design';
import { AnimatedInputLabel } from '../../Atoms/AnimatedLabel/AnimatedLabel.style';

const iconStyle = css`
  margin-right: ${spacing.xs + 2 + 'px'};
  margin-bottom: 2px;
  transition: 0.5s;
  align-self: flex-end;
`;

interface IColorState {
  type: 'underline' | 'label';
  isActiv?: boolean;
  errorMessage?: string;
  value?: string | number | readonly string[] | undefined;
  placeholder?: string;
}

const calcColorState = ({ type, isActiv, errorMessage, value, placeholder }: IColorState) => {
  if (errorMessage) return 'error';
  if (isActiv) return 'active';
  if (value && type !== 'underline') return 'active';
  if (placeholder) return 'default';
  return 'default';
};

export type IInputWrapperUserInputProps = Omit<IInputWrapper, 'children' | 'id' | 'underline' | 'autoWidth' | 'value'>;
export interface IInputWrapper {
  id: string;
  isActiv?: boolean;
  label?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  errorMessage?: string;
  icon?: JSX.Element;
  value?: string | number | readonly string[] | undefined;
  align?: 'left' | 'center';
  autoWidth?: boolean;
  underline?: boolean;
  placeholder?: string;
}
export default function InputWrapper(props: IInputWrapper) {
  const { id, value, isActiv, disabled, children, errorMessage, icon, label, align, underline = true, autoWidth, placeholder } = props;

  const colorStateLabel = calcColorState({ type: 'label', isActiv, errorMessage, value, placeholder });
  const colorStateUnderline = calcColorState({ type: 'underline', isActiv, errorMessage, value, placeholder });

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
          <AnimatedInputLabel
            htmlFor={id}
            $align={align}
            $moveUp={Boolean(value) || isActiv || Boolean(placeholder)}
            $colorState={colorStateLabel}
          >
            {label}
          </AnimatedInputLabel>
        )}
        {underline && <FancyInputUnderline colorState={colorStateUnderline} />}
      </InputContainer>
      {/* // ---------if a errorMessage prop exists this message will shown------------- // */}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      {/* // --------------------------------------------------------------------------- // */}
    </StyledInputWrapper>
  );
}
