import styled from "styled-components";
import { spacingPx, uiColors } from "../../Design/design";

export const MonthContainer = styled.div`
  margin-top: ${spacingPx.md};

  h2 {
    margin: ${spacingPx.sm};
    margin-left: ${spacingPx.sm};
    color: ${uiColors.secondary.main};
  }
`;

export const StyledCalendar = styled.div`
  width: 100%;
  height: 300px;
  overflow-y: auto;
`;

export const DateContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);

`;

export const DateNumber = styled.span`
  width: 14.28%; /* 100 / 7 days */
  text-align: right;
  cursor: pointer;
  box-sizing: border-box;
`;