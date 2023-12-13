import { TTheme } from '@/interface/TTheme';

import { css } from 'styled-components';

const focusStyle = css<{ theme: TTheme }>`
  box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.accent[0]};
`;

export default focusStyle;
