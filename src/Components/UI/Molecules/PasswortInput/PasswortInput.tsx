import React from 'react'

import RawInput, { IRawInput } from '../../Atoms/RawInput';
import styled from 'styled-components';
import { AnimatedInputLabel, AnimatedLabelFocusStyle } from '../../Atoms/InputLabel';
import { UnderLineFocusStyle } from '../../Atoms/InputUnderline';

interface IPasswortInput extends IRawInput {
  id?: string;
  disabled?: boolean;
  value?: string | number;
  errorMessage?: string;
  handler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  activeHandler?: (value: boolean) => void;
};


const StyledPasswortInput = styled(RawInput)<IPasswortInput>`
  ${({ align, errorMessage }) => AnimatedLabelFocusStyle(align, errorMessage)}
  //the focus animation for the underline
  ${({ align }) => UnderLineFocusStyle(AnimatedInputLabel, align)}
`;



export default function PasswortInput(props: IPasswortInput) {
  const { value, handler, activeHandler, disabled, errorMessage, align, id } = props;

  const focusHandler = (value: boolean) => {
    activeHandler && activeHandler(value);
  };
  

  
  
  return (
    <>    
      <StyledPasswortInput  
        type="password"
        placeholder=""
        errorMessage={errorMessage}
        value={value}
        align={align}
        autoComplete={'off'}
        onChange={handler}
        disabled={disabled}
        required
        onFocus={() => focusHandler(true)}
        onBlur={() => focusHandler(false)}
      />
    </>
  )
}
