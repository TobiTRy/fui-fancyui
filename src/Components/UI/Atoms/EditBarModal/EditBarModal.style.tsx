import styled, { css } from "styled-components";
import { spacingPx, spacing ,uiColors } from "../../Design/design";

//this calculates the spacing from left and right or nothing
const calcBarWidthandSpacing = (width?: string, spacingLeftRight?: string) => {
  if (width) {
    if (spacingLeftRight) {
      return css`
        width: calc(${width} - ${spacingLeftRight});
      `;
    } else {
      return css`
        width: ${width};
      `;
    }
  } else {
    if (spacingLeftRight) {
      return css`
        width: calc(100% - ${spacingLeftRight});
      `;
    } else {
      return css`
        width: 100%;
      `;
    }
  }
};


export const Wrapper = styled.div<{ width?: string; secondBar?: boolean; spacingLeftRight?: string }>`
  box-sizing: border-box;
  position: relative;
  padding: ${spacingPx.md};
  z-index: 99;
  ${({ width, spacingLeftRight }) => calcBarWidthandSpacing(width, spacingLeftRight)};
  background-color: ${uiColors.primary.dark};
  border-radius: 12px 12px 0px 0px;
  box-shadow: 0 0 12px black;
`;

export const WrapperContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacingPx.md};

`
