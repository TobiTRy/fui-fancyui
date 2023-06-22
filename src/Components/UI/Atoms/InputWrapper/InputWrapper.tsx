import React, { useId } from 'react';
import { css } from 'styled-components';

import { ErrorMessage, StyledInputWrapper, InputContainer } from './InputWrapper.style';
import UnderLine from '../InputUnderline';
import { AnimatedInputLabel } from '../InputLabel';
import SVGAtom from '../SVGAtom/SVGAtom';
import { spacing, spacingPx } from '../../Design/design';

const iconStyle = css`
  margin-right: ${spacing.xs + 2 + 'px'};
  margin-bottom: 2px;
  transition: 0.5s;
  align-self: flex-end;
`;

export interface IInputWrapper {
  id?: string;
  isActiv?: boolean;
  label?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  errorMessage?: string;
  icon?: JSX.Element;
  value?: string | number;
  align?: 'left' | 'center';
};
export default function InputWrapper(props: IInputWrapper) {
  const { id, isActiv, disabled, children, errorMessage, icon, label, align } = props;

  return (
    <StyledInputWrapper disabled={disabled}>
      {icon && <SVGAtom externalStyle={iconStyle} size="large" isActive={isActiv}>{icon}</SVGAtom>}
      <InputContainer givePadding={Boolean(label)}>
        {children}
        {/* the label for the input field it shows when a label prop exists*/}
        {label && (
          <AnimatedInputLabel htmlFor={id} align={align} disabledAndSelected={Boolean(disabled) && Boolean(props.value)}>
            {label}
          </AnimatedInputLabel>
        )}
        <UnderLine errorMessage={errorMessage} active={isActiv}/>
      </InputContainer>
      {/* // ---------if a errorMessage prop exists this message will shown------------- // */}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      {/* // --------------------------------------------------------------------------- // */}
    </StyledInputWrapper>
  );
};
