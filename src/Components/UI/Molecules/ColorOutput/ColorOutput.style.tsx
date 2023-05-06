import styled from "styled-components";
import {  spacingPx } from "../../Design/design";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 9fr 1fr;
  gap: ${spacingPx.sm};
  align-items: stretch;
  width: 100%;
  box-sizing: border-box;
`;

export const WrapperSVG = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 24px;
    height: 24px;
    transform: rotate(90deg);
  }
`;
