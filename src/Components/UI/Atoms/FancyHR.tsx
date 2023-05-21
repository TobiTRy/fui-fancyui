import styled from "styled-components";

import { uiColors, IUiColorsTypes } from "../Design/design";

const FancyHR = styled.hr<{design?: IUiColorsTypes }>`
  width: 100%;
  background-color: ${({ design }) => design ? uiColors[design].main : uiColors.accent.main };
  display: block;
  height: 1px;
  border: 0;
  padding: 0;

  &::after {
    content: '';
    display: block;
    width: 100%;
    background-color: ${({ design }) => design ? uiColors[design].main : uiColors.accent.main };
    height: 1px;
    border: 0;
    padding: 0;
    filter: blur(0.5px);
  }
`;

export default FancyHR;