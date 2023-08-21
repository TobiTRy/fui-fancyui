import { styled } from 'styled-components'
import InputLabel from '../InputLabel/InputLabel';
import { spacingPx, uiColors } from '../../Design/design';

export type TAlign = 'left' | 'center' | 'right';
//the aligned label is only with align left or centerd {align?: string; active?: boolean}
const AlignedInputLabel = styled(InputLabel)<{$align?: TAlign; $isActive?: boolean;}>`
  display: flex;
  align-items: flex-end;
  margin-bottom: ${spacingPx.xxs};
  justify-content: ${({$align}) =>  $align === 'left' ? 'flex-start' : $align === 'center' ? 'center' : 'flex-end'};
  color: ${({ $isActive }) => ($isActive ? uiColors.accent.main : 'gray')};
`

export default AlignedInputLabel;