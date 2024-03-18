import { TTheme } from '@/types/TTheme';
import { styled, css } from 'styled-components';

// eslint-disable-next-line react-refresh/only-export-components
export const fancyBarStyle = css<{ theme?: TTheme }>`
  padding: ${({ theme }) => theme.spacing.xs + ' ' + theme.spacing.xs + ' 0 ' + theme.spacing.xs};
  border-bottom: none;
`;

export const ButtonWrapper = styled.div<{ theme?: TTheme }>`
  padding-bottom: ${({ theme }) => theme.spacing.xxs};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
