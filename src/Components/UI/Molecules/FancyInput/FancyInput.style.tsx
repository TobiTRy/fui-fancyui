import { uiColors, fontSize, colorPalet, spacingPx, spacing } from '../../Design/design';

import styled, { css } from 'styled-components';

//this function handles some alignment of the elements
import IFancyInput from './FancyInput.model';
import IStyledPrefixAndPicker from '../../Interface/IStyledPrefixAndPicker.model';
import { UnderLineFocusStyle } from '../../Atoms/InputUnderline';
import { AnimatedInputLabel, AnimatedLabelFocusStyle } from '../../Atoms/AnimatedLabel';

type ITypeStyle = IFancyInput['type'];
// this generates the style for the specific input field depending on the type of the input
const generateInputTypeStyle =  (type: ITypeStyle, placeholder?: string) => {
  switch (type) {
    case 'number':
      return css`
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      `;
    case 'date':
      //thi style makes the placeholder when its not focused transparent
      return css`
        color: transparent;
        font-weight: 500;
        transition: color 0.4s ease-in-out;

        &::before {
          content: attr(${placeholder});
          position: absolute;
        }

        &:focus,
        &:valid {
          color: ${colorPalet.white_high};
        }

        &:focus::before,
        &:valid::before {
          content: '';
        }

        &::-webkit-calendar-picker-indicator {
          filter: invert(1);
          position: absolute;
          right: ${spacing.xs + 2 + 'px'} ;
        }
      `;
    case 'password':
      //this disables the MS Edge password eye
      css`
      &::-ms-reveal,
      &::-ms-clear {
        display: none;
      }`
  }
};


//the input icon displayed on the left
export const Icon = styled.i<{ $isActive: boolean; $errorMessage?: string }>`
  color: ${({ $isActive, $errorMessage }) => (!$errorMessage ? ($isActive ? uiColors.accent.main : 'gray') : colorPalet.red_dark)};
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
export const InputContainer = styled.div<{ $givePadding: boolean }>`
  width: 100%;
  grid-column: 2/3;
  ${({ $givePadding }) =>
    $givePadding &&
    css`
      padding-top: ${spacing.lg + 2 + 'px'};
    `};
  position: relative;
`;

//generate type with the prefix and the pick the needed style props
type FancyInputStyle = IStyledPrefixAndPicker<IFancyInput, 'align' | 'calculatedType' | 'errorMessage'>;
type IFancyInputStyle = FancyInputStyle & Pick<IFancyInput, 'type'>;
//only the input field
export const Input = styled.input<IFancyInputStyle>`
  font-weight: 500;
  box-sizing: border-box;
  width: 100%;
  appearance: none;
  background-color: transparent;
  color: ${colorPalet.white_high};
  text-align: ${({ $align }) => ($align !== 'center' ? 'left' : 'center')};
  border: none;
  outline: none;
  box-shadow: none;
  font-size: ${fontSize.medium};
  padding: ${({ $calculatedType, $align }) =>
    $calculatedType !== 'password'
      ? //if type is not password
        `0px 0px ${spacing.xs + 2 + 'px'}`
      : //if type is password
      $align === 'center'
      ? `12px 20px 4px 20px`
      : `12px 20px 4px 0px`};

  //the focus animation for the label
  ${({ $align, $errorMessage }) => AnimatedLabelFocusStyle($align, $errorMessage)}
  //the focus animation for the underline
  ${({ $align }) => UnderLineFocusStyle(AnimatedInputLabel, $align)}
  //removes the arrows from the number input
  ${({ type, placeholder }) => generateInputTypeStyle(type, placeholder)}
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
