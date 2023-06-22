import styled, { css } from "styled-components";
import { disabledStyle } from "../../HelperFunctions/disableStyle";
import { spacingPx, fontSize, colorPalet, spacing } from "../../Design/design";

export const StyledInputWrapper = styled.div<{disabled?: boolean}>`
  box-sizing: border-box;
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: 1fr auto;
  width: 100%;
  
  ${({disabled}) => disabled ? disabledStyle : ''};
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


//the input/label/underline are all wrapped in thid container
export const InputContainer = styled.div<{ givePadding: boolean }>`
  width: 100%;
  grid-column: 2/3;
  ${({ givePadding }) =>
    givePadding &&
    css`
      padding-top: ${spacing.lg + 2 + 'px'};
    `};
  position: relative;
`;