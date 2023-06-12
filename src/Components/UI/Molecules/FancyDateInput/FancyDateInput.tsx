import React from 'react'
import styled, { css } from 'styled-components'
import { colorPalet, fontSize, spacing } from '../../Design/design';
import { AnimatedLabelFocusStyle } from '../../Atoms/InputLabel';
import { UnderLineFocusStyle } from '../../Atoms/InputUnderline';

const Wrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
`

const DateInput = styled.input`
  width: 100%;
`

//only the input field
export const Input = styled.input`
  font-weight: 500;
  box-sizing: border-box;
  width: 100%;
  appearance: none;
  background-color: transparent;
  color: ${colorPalet.white_high};
  text-align: ${({ align }) => (align !== 'center' ? 'left' : 'center')};
  border: none;
  outline: none;
  box-shadow: none;
  font-size: ${fontSize.medium};
  padding: ${({ calculatedType, align }) =>
    calculatedType !== 'password'
      ? //if type is not password
        `0px 0px ${spacing.xs + 2 + 'px'}`
      : //if type is password
      align === 'center'
      ? `12px 20px 4px 20px`
      : `12px 20px 4px 0px`};

  //this disables the MS Edge password eye

  ${({align, errorMessage}) => AnimatedLabelFocusStyle(align, errorMessage)}
  //the focus animation for the underline
  ${({align}) => UnderLineFocusStyle(AnimatedInputLabel, align)}

  //removes the arrows from the number input

`;
export default function FancyDateInput() {
  return (
    <Wrapper>

      <DateInput type='date'/>
    </Wrapper>
  )
}
