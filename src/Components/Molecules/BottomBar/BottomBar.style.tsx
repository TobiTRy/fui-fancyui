import { css } from 'styled-components';

import { TTheme } from '@/components/Interface/TTheme';

export const fancyBarStyle = css<{ theme?: TTheme }>`
  display: flex;
  padding: ${({ theme }) => theme.spacing.sm + ' ' + theme.spacing.sm + ' ' + theme.spacing.sm + ' 0'};
  width: 100%;
`;
