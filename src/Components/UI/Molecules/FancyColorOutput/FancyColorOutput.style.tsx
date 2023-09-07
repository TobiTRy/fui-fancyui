import { styled } from 'styled-components';
import {  spacingPx, uiColors } from "../../Design/design";

export const Container = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 9fr 1fr;
  align-items: stretch;
  width: 100%;
  gap: ${spacingPx.sm};
`;

export const WrapperSVG = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 24px;
    height: 24px;
    fill: ${uiColors.secondary[0]};
  }
`;
