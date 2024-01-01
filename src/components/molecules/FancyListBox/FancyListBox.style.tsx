import { CSSProp, css } from 'styled-components';

import { TTheme } from '@/types/TTheme';

export const generateFancyBoxStyle = (externalStyle?: CSSProp) => css<{ theme: TTheme }>`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: space-between;
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  ${externalStyle}
`;
