import styled from 'styled-components'
import InputLabel from '../InputLabel/InputLabel';
import { spacingPx, uiColors } from '../../Design/design';

//the aligned label is only with align left or centerd {align?: string; active?: boolean}
const AlignedInputLabel = styled(InputLabel)<{$align?: string; $isActive?: boolean;}>`
  display: flex;
  align-items: flex-end;
  margin-bottom: ${spacingPx.xxs};
  justify-content: ${({$align}) => $align !== 'center' ? 'flex-start' : 'center' };
  color: ${({ $isActive }) => ($isActive ? uiColors.accent.main : 'gray')};
`

export default AlignedInputLabel;