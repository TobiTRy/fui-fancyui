import { TTheme } from '@/types/TTheme';
import { styled } from 'styled-components';

export const CalendarWrapper = styled.div<{ theme: TTheme }>`
  display: flex;
  height: 350px;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const DaysContainer = styled.table<{ theme?: TTheme }>`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xs};

  tbody {
    display: grid;
    grid-template-rows: repeat(4, 1fr);
  }

  tr {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }
`;

export const DateNumber = styled.span`
  text-align: right;
  cursor: pointer;
  box-sizing: border-box;
`;
