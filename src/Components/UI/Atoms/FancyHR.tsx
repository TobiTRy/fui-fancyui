import styled from "styled-components";

import { uiColors, IUiColorsTypes } from "../Design/design";

// --------------------------------------------------------------------------- //
// ------------ A dynamic horizontal line for better UX/UI  ------------------ //
// --------------------------------------------------------------------------- //
const FancyHR = styled.hr<{ $design?: IUiColorsTypes }>`
  width: 100%;
  background-color: ${({ $design }) => $design ? uiColors[$design].main : uiColors.accent.main };
  display: block;
  height: 1px;
  border-radius: 2px;
  border: 0;
  padding: 0;
  margin: 0;

  &::after {
    content: '';
    display: block;
    width: 100%;
    background-color: ${({ $design }) => $design ? uiColors[$design].main : uiColors.accent.main };
    height: 1px;
    border: 0;
    padding: 0;
    filter: blur(0.5px);
  }
`;

export default FancyHR;