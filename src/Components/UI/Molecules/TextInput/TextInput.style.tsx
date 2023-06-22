import styled from "styled-components";

import { colorPalet, fontSize, spacing } from "../../Design/design";
import { AnimatedInputLabel, AnimatedLabelFocusStyle } from "../../Atoms/InputLabel";
import { UnderLineFocusStyle } from "../../Atoms/InputUnderline";

interface ITextInput {
  type: string;
  placeholder?: string;
  align?: 'left' | 'center';
  errorMessage?: string;
}
export const StyledInput = styled.input<ITextInput>`
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
  padding: 0px 0px ${spacing.xs + 2 + 'px'};
  
  //the focus animation for the label
  ${({ align, errorMessage }) => AnimatedLabelFocusStyle(align, errorMessage)}
  //the focus animation for the underline
  ${({ align }) => UnderLineFocusStyle(AnimatedInputLabel, align)}
`;
