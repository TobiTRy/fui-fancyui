import { css } from 'styled-components';

import { TTheme } from '@/types/TTheme';

export const fancyBarStyle = css<{ theme?: TTheme }>`
  display: flex;
  padding: ${({ theme }) => theme.spacing.sm + ' ' + theme.spacing.sm + ' 0 ' + theme.spacing.sm};
  width: 100%;
`;
