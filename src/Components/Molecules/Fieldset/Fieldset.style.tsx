import { styled } from 'styled-components';
import { TalignLabel } from './Fieldset';
import { disabledStyle } from '../../../design/designFunctions/disabledStyle/disableStyle';
import { TTheme } from '@/interface/TTheme';

export const StyledFieldset = styled.fieldset<{ $disabled?: boolean }>`
  width: 100%;
  border: none;
  padding: 0;
  margin: 0;
  ${({ $disabled }) => $disabled && disabledStyle}
`;

export const StyledLegend = styled.legend<{ alignLabel?: TalignLabel; theme: TTheme }>`
  margin: 0 ${({ alignLabel }) => (alignLabel === 'center' ? 'auto' : '0')} ${({ theme }) => theme.spacing.xs};
`;
