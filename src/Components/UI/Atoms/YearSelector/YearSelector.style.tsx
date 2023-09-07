import { styled } from "styled-components";
import { fontSize, uiColors } from "../../Design/design";

export const StyledYearSelector = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: ${uiColors.secondary[0]};

  span {
    font-size: ${fontSize.lg};
  }
`;

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: ${uiColors.secondary[0]};
  border: none;
  padding: 0;
  cursor: pointer;
`;