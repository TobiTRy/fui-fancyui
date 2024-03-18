import { TTheme } from '@/types/TTheme';
import { styled } from 'styled-components';

// The List with dymaic spacing between items
export const StyledList = styled.div<{ $spacing?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${({ $spacing }) => ($spacing ? $spacing : '0px')};
`;

export const Wrapper = styled.div<{ theme: TTheme }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.xl};
`;
