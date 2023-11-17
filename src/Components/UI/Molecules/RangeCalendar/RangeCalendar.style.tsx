import { styled } from 'styled-components';
import { spacingPx } from '../../Design/designSizes';
import { TUiColorsType } from '../../Design/color/designColor';

export const MonthContainer = styled.div<{ theme: TUiColorsType }>`
  margin-top: ${spacingPx.md};

  h2 {
    margin: ${spacingPx.sm};
    margin-left: ${spacingPx.sm};
  }
`;

export const StyledCalendar = styled.div`
  width: 100%;
  height: 300px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export const DateContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

// this span is for the empty days
export const DateNumber = styled.span`
  width: 14.28%; /* 100 / 7 days */
  text-align: right;
  cursor: pointer;
  box-sizing: border-box;
`;
