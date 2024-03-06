import { TTheme } from '@/types/TTheme';
import { css } from 'styled-components';

export const fancyBarStyle = css<{ theme?: TTheme }>`
  padding: ${({ theme }) => theme.spacing.sm + ' ' + theme.spacing.sm + ' 0 ' + theme.spacing.sm};
  border-bottom: none;
`;
