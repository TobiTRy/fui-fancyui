import styled from "styled-components";
import { borderRadius, spacingPx, uiColors } from "../../Design/design";

export const DatePickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${uiColors.primary.hover};
  border-radius: ${borderRadius.extraLarge};
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
`;

export const WrapperYearSelector = styled.div`
  width: 100%;
  padding: ${spacingPx.md} ${spacingPx.md} ${spacingPx.md};
  box-sizing: border-box;
`;

export const WrapperWeekdays = styled.div`
  width: 100%;
  border-bottom: solid 1px ${uiColors.secondary.hover};
  padding-bottom: ${spacingPx.xxs};
`;
