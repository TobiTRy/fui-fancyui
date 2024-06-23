import { styled } from 'styled-components';
import { disabledStyle } from '@/design/designFunctions/disabledStyle';
import { TTheme } from '@/types/TTheme';
import { TTextAlignLC } from '@/types/TTextAlignLC';

export const StyledFieldset = styled.fieldset<{ $disabled?: boolean }>`
  width: 100%;
  border: none;
  padding: 0;
  margin: 0;
  ${({ $disabled }) => $disabled && disabledStyle}
`;

export const StyledLegend = styled.legend<{ $alignLegend?: TTextAlignLC; theme: TTheme }>`
  margin: 0 ${({ $alignLegend }) => ($alignLegend === 'center' ? 'auto' : '0')} ${({ theme }) => theme.spacing.xxs};
`;
