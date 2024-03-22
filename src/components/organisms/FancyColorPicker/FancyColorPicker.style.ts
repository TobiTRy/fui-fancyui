import { TTheme } from '@/types/TTheme';
import { styled } from 'styled-components';

export const Wrapper = styled.div<{ theme: TTheme }>`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;
