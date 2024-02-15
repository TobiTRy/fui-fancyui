import { styled } from 'styled-components';

import { TTheme } from '@/types/TTheme';

export const MonthContainer = styled.div<{ theme: TTheme }>`
  width: 100%;
  display: inline-block;
  min-height: 300px;
  position: relative;
  overflow-y: auto;
  flex: 1;
`;

export const StyledCalendar = styled.div`
  width: 100%;
  height: 300px;
  flex-direction: column;
  overflow: hidden;
  overflow-y: auto;
  scroll-snap-type: y mandatory;

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
