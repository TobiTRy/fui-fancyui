import { TTheme } from '@/types/TTheme';

import { css } from 'styled-components';

const focusStyle = css<{ theme: TTheme }>`
  box-shadow: 0 0 0 3px ${({ theme }) => theme.color.accent[0]}40;
  outline: 2px solid ${({ theme }) => theme.color.accent[0]};
  outline-offset: 2px;
`;

export default focusStyle;
