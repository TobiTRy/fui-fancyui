import { uiColors, fontSize, colorPalet, spacingPx } from '../Design/design';

import styled, { css } from 'styled-components';

//this function handles some alignment of the elements
import { alignHandler } from '../HelperFunctions/alignmentHandler';
import IFancyInput from './FancyInput.model';

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

//the underline for the input field
export const UnderLine = styled.i<IFancyInput>`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  border-radius: 5px;
  background: gray;
  overflow: hidden;
  width: 100%;

  &::before {
    content: '';
    width: 100%;
    border-radius: 5px;
    position: absolute;
    left: 0;
    bottom: 0;
    opacity: 0;
    height: 100%;
    background: ${({ errorMessage }) =>
      !errorMessage
        ? css`linear-gradient(90deg, ${uiColors.accent.main}, ${uiColors.accent.main_light})`
        : css`linear-gradient(90deg, ${colorPalet.red_dark}, ${colorPalet.red_light})`};
    transition: 0.25s;
    transition-timing-function: cubic-bezier(0.46, 0.03, 0.52, 0.96);
  }
`;

//the label for the input field
export const Label = styled.label<IFancyInput>`
  position: absolute;
  ${({ align }) => alignHandler(align!, 'LabelInput')};
  padding: 12px 0 5px;
  font-weight: bold;
  color: gray;
  pointer-events: none;
  transition: 0.3s;
  user-select: none;
  transition-timing-function: cubic-bezier(0.46, 0.03, 0.52, 0.96);
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
  caret-color: ${uiColors.accent.main};
  width: 100%;
  appearance: none;
  background-color: transparent;
  color: ${colorPalet.light};
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

  //the focus animation for the Label
  &:focus ~ ${Label}, &:valid ~ ${Label} {
    color: ${({ errorMessage }) => (errorMessage ? colorPalet.red_dark : uiColors.accent.main)};
    transform: ${({ align }) => (align !== 'center' ? 'translateY(-20px)' : 'translateY(-20px) translate(-50%)')};
    font-weight: 600;
  }
  //the focus animation for the underline
  &:focus ~ ${UnderLine}::before {
    opacity: 1;
  }
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

//the complete formation for the input field
export const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr auto;
`;