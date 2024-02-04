import { TTheme } from 'lib';
import { styled } from 'styled-components';

export const DaysContainer = styled.div<{ theme?: TTheme }>`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xs};
  grid-template-columns: repeat(7, 1fr);
`;

export const DateNumber = styled.span`
  text-align: right;
  cursor: pointer;
  box-sizing: border-box;
`;
