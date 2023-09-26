import { styled } from 'styled-components'
import InputLabel from '../InputLabel/InputLabel';
import { spacingPx } from '../../Design/design';
import { TUiColorsType } from '../../Design/color/designColor';
import { TLayer } from '../../Design/color/generateColorSteps';
import { getTextColor } from '../../Design/color/colorCalculatorForComponet';


export type TAlign = 'left' | 'center' | 'right';
//the aligned label is only with align left or centerd {align?: string; active?: boolean}

interface IAlignedInputLabel {
  $align?: TAlign;
  $isActive?: boolean;
  theme: TUiColorsType;
  $themeType?: keyof TUiColorsType;
  $layer?: TLayer;
}
const AlignedInputLabel = styled(InputLabel)<IAlignedInputLabel>`
  display: flex;
  align-items: flex-end;
  margin-bottom: ${spacingPx.xxs};
  justify-content: ${({$align}) =>  $align === 'left' ? 'flex-start' : $align === 'center' ? 'center' : 'flex-end'};
  color: ${({ $isActive, theme, $layer = 4, $themeType = 'secondary' }) => ($isActive ? theme.accent[0] : getTextColor({ theme, $themeType, $textLayer: $layer }))};
`

export default AlignedInputLabel;