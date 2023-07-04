import styled from "styled-components";

import { IUiColorsTypes, uiColors } from '../Design/design';

const FancyVR = styled.hr<{design?: IUiColorsTypes }>`
  position: absolute; // added this line
  top: 5%; // added this line
  bottom: 5%; // added this line
  background-color: ${({ design }) => design ? uiColors[design].main : uiColors.accent.main };
  display: block;
  width: 1px;
  border-radius: 2px;
  border: 0;
  padding: 0;

  &::after {
    content: '';
    display: block;
    height: 100%;
    background-color: ${({ design }) => design ? uiColors[design].main : uiColors.accent.main };
    width: 1px;
    border: 0;
    padding: 0;
    filter: blur(0.5px);
  }
`;



export default FancyVR

