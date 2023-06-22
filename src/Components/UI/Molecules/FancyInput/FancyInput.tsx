import React, { useId, useState } from 'react';

import IFancyInput from './FancyInput.model';
import { ErrorMessage, Icon, Input, InputContainer, PasswordIcon } from './FancyInput.style';
import UnderLine from '../../Atoms/InputUnderline';
import InputWrapper from '../../Atoms/InputWrapper/InputWrapper';

import { AnimatedInputLabel } from '../../Atoms/InputLabel';
import SVGEyeOpen from '../../SVGIcons/SVGEyeOpen';
import SVGEyeCrossed from '../../SVGIcons/SVGEyeCrossed';

export default function FancyInput(props: IFancyInput) {
  const { label, type, align, icon, errorMessage, disabled, handler, value, defaultValue, ...inputProps } = props;

  //this state toggled the clean text input and the censored one
  const [showPassword, setShowPassword] = useState(false);

  //this state switches when the input is focused
  const [isActive, setIsActive] = useState(false);

  const id = useId();

  //this condiational clacualtes the types of the input, this is needed for the eye from the password
  const calculatedType = type !== 'password' ? type : showPassword ? 'text' : 'password';

  return (
    <InputWrapper disabled={disabled}>
      {/* // --------- the icon for the input field ------------- // */}
      {icon && (
        <Icon active={isActive} errorMessage={errorMessage}>
          {icon}
        </Icon>
      )}

      {/* // ------------------------ the input field  ----------------------- // */}
      <InputContainer givePadding={Boolean(label)}>
        {/* the input field  */}
        <Input
          id={id}
          errorMessage={errorMessage}
          placeholder=""
          type={calculatedType}
          required
          align={align}
          {...inputProps}
          value={value}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
          autoComplete={'off'}
          onChange={handler}
          disabled={disabled}
        />

        {/* the label for the input field it shows when a label prop exists*/}
        {label && (
          <AnimatedInputLabel htmlFor={id} align={align} disabledAndSelected={Boolean(disabled) && Boolean(props.value)}>
            {label}
          </AnimatedInputLabel>
        )}

        {/*  icons for the password field to show and hide the password */}
        {type === 'password' && (
          <PasswordIcon onClick={() => setShowPassword(!showPassword)}>
            {!showPassword
              ? // the eye icon for the password type toggle
                SVGEyeOpen
              : // the crossed out eye icon for the password type toggle
                SVGEyeCrossed}
          </PasswordIcon>
        )}
        {/* // --------- the underline form the input field------------- // */}
        <UnderLine errorMessage={errorMessage}></UnderLine>
      </InputContainer>

      {/* // ---------if a errorMessage prop exists this message will shown------------- // */}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      {/* // --------------------------------------------------------------------------- // */}
    </InputWrapper>
  );
}
