import styled, { css } from "styled-components";
import { colorPalet, spacingPx, uiColors } from "../Design/design";
import { alignHandler } from "../HelperFunctions/alignmentHandler";

// --------------------------------------------------------------------------- //
// --------------- The main label design for the input elements -------------- //
// --------------------------------------------------------------------------- //
const LabelTemplate = css`
  width: 100%;
  color: gray;
  font-weight: bold;
  pointer-events: none;
  transition: 0.3s;
  user-select: none;
  transition-timing-function: cubic-bezier(0.46, 0.03, 0.52, 0.96);
`


// --------------------------------------------------------------------------- //
// ----------- The diferent label designes for animation and static  --------- //
// --------------------------------------------------------------------------- //

//the animated label is for the inputs where the Placholder is the label
export const AnimatedInputLabel = styled.label<{align?: string; disabledAndSelected?: boolean }>`
  ${LabelTemplate}
  position: absolute;
  padding: 12px 0 5px;
  ${({ align, disabledAndSelected }) => alignHandler(align!, 'LabelInput', disabledAndSelected)};
`

export const AnimatedLabelFocusStyle = (align?: 'center' | 'left', errorMessage?: string) => {
  const isErrorMessage = (errorMessage ? colorPalet.red_dark : uiColors.accent.main);
  const alignStyle = (align !== 'center' ? 'translateY(-20px)' : 'translateY(-20px) translate(-50%)');

  //the focus animation for the Label
  return css`
    &:focus ~ ${AnimatedInputLabel}, &:valid ~ ${AnimatedInputLabel} {
    color: ${isErrorMessage};
    transform: ${alignStyle};
    font-weight: 600;
  }
  `
}

//the aligned label is only with align left or centerd 
export const AlignedInputLabel = styled.label<{align?: string; active?: boolean}>`
  ${LabelTemplate}
  display: flex;
  align-items: flex-end;
  justify-content: ${({align}) => align !== 'center' ? 'flex-start' : 'center' };
  margin-bottom: ${spacingPx.xxs};
  color: ${({ active }) => (active ? uiColors.accent.main : 'gray')};
`

