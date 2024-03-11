import { CSSProp, styled } from 'styled-components';

import { TTheme } from '@/types/TTheme';

export const StyledDateNumberWithStatus = styled.div<{ theme: TTheme; $externalStyle: CSSProp }>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xxs};
  ${({ $externalStyle }) => $externalStyle}
`;
