import styled from 'styled-components'
import InputLabel from './InputLabel1';
import { spacingPx, uiColors } from '../Design/design';

//the aligned label is only with align left or centerd {align?: string; active?: boolean}
const AlignedInputLabel = styled(InputLabel)<{align?: string; active?: boolean;}>`
  display: flex;
  align-items: flex-end;
  justify-content: ${({align}) => align !== 'center' ? 'flex-start' : 'center' };
  margin-bottom: ${spacingPx.xxs};
  color: ${({ active }) => (active ? uiColors.accent.main : 'gray')};
`

export default AlignedInputLabel;