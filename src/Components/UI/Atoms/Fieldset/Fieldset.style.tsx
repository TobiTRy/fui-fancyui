import { styled } from 'styled-components';
import { TalignLabel } from './Fieldset';
import { spacingPx } from '../../Design/design';

export const StyledFieldset = styled.fieldset<{alignLabel?: TalignLabel}>`
  border: none;
  padding: 0;
  margin: 0;
`;

export const StyledLegend = styled.legend<{alignLabel?: TalignLabel}>`
  margin: 0 ${({alignLabel}) => alignLabel === 'center' ? 'auto' : '0'} ${spacingPx.xxs};
`