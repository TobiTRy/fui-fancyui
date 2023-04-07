import { uiColors, fontSize, colorPalet, spacingPx } from '../../Design/design';

import styled, { css } from 'styled-components';

//this function handles some alignment of the elements
import IFancyInput from './FancyInput.model';


import { UnderLineFocusStyle } from '../../Atoms/InputUnderline';
import { AnimatedInputLabel, AnimatedLabelFocusStyle } from '../../Atoms/InputLabel';


//the input icon displayed on the left
export const Icon = styled.i<{ active: boolean; errorMessage?: string }>`
  color: ${({ active, errorMessage }) => (!errorMessage ? (active ? uiColors.accent.main : 'gray') : colorPalet.red_dark)};
  margin-right: 8px;
  margin-bottom: 2px;
  transition: 0.5s;
  display: flex;
  align-items: flex-end;

  svg {
    height: 20px;
    width: 20px;
  }
`;

//the input/label/underline are all wrapped in thid container
export const InputContainer = styled.div`
  width: 100%;
  grid-column: 2/3;
  padding-top: 10px;
  position: relative;
`;

//only the input field
export const Input = styled.input<IFancyInput>`
  font-weight: 500;
  box-sizing: border-box;
  width: 100%;
  appearance: none;
  background-color: transparent;
  color: ${colorPalet.white_high};
  text-align: ${({ align }) => (align !== 'center' ? 'left' : 'center')};
  border: none;
  height: 40px;
  outline: none;
  box-shadow: none;
  font-size: ${fontSize.medium};
  padding: ${({ calculatedType, align }) =>
    calculatedType !== 'password'
      ? //if type is not password
        align === 'center'
        ? `12px 10px 4px`
        : `12px 0px 4px`
      : //if type is password
      align === 'center'
      ? `12px 20px 4px 20px`
      : `12px 20px 4px 0px`};

  //this disables the MS Edge password eye
  ${({ type }) =>
    type === 'password' &&
    css`
      &::-ms-reveal,
      &::-ms-clear {
        display: none;
      }
    `}

  ${({align, errorMessage}) => AnimatedLabelFocusStyle(align, errorMessage)}
  //the focus animation for the underline
  ${({align}) => UnderLineFocusStyle(AnimatedInputLabel, align)}
`;

//the style for the error message
export const ErrorMessage = styled.p`
  grid-column: 2;
  grid-row: 2;
  margin: 0;
  margin-top: ${spacingPx.xxs};
  font-size: ${fontSize.extraSmall};
  color: ${colorPalet.red_dark};
`;

//the style for the eye icon for the password type
export const PasswordIcon = styled.i`
  position: absolute;
  bottom: 4px;
  right: 4px;

  svg {
    color: ${colorPalet.white_dark};
  }
`;

