import { styled } from 'styled-components';
import { TalignLabel } from './Fieldset';
import { spacingPx } from '../../Design/designSizes';
import { disabledStyle } from '../../HelperFunctions/designFunctions/disableStyle';

export const StyledFieldset = styled.fieldset<{ $disabled?: boolean }>`
  border: none;
  padding: 0;
  margin: 0;
  ${({ $disabled }) => $disabled && disabledStyle}
`;

export const StyledLegend = styled.legend<{ alignLabel?: TalignLabel }>`
  margin: 0 ${({ alignLabel }) => (alignLabel === 'center' ? 'auto' : '0')} ${spacingPx.xxs};
`;
