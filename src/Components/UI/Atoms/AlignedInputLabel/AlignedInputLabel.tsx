import { styled } from 'styled-components'
import InputLabel from '../InputLabel/InputLabel';
import { spacingPx } from '../../Design/design';
import { TUiColorsType } from '../../Design/color/designColor';


export type TAlign = 'left' | 'center' | 'right';
//the aligned label is only with align left or centerd {align?: string; active?: boolean}
const AlignedInputLabel = styled(InputLabel)<{$align?: TAlign; $isActive?: boolean; theme: TUiColorsType}>`
  display: flex;
  align-items: flex-end;
  margin-bottom: ${spacingPx.xxs};
  justify-content: ${({$align}) =>  $align === 'left' ? 'flex-start' : $align === 'center' ? 'center' : 'flex-end'};
  color: ${({ $isActive, theme }) => ($isActive ? theme.accent[0] : theme.secondary[7])};
`

export default AlignedInputLabel;