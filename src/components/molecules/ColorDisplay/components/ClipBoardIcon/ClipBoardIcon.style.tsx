import { TTheme } from '@/types/TTheme';
import styled from 'styled-components';

export const WrapperSVG = styled.div<{ theme: TTheme }>`
  position: absolute;
  right: ${({ theme }) => theme.spacing.sm};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1px;
`;
