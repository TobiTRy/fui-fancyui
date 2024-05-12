import { TTheme } from '@/types/TTheme';

import { css } from 'styled-components';

const focusStyle = css<{ theme: TTheme }>`
  box-shadow: 0 0 0 1px ${({ theme }) => theme.color.accent[0]};
`;

export default focusStyle;
