import { styled } from 'styled-components';

import InputLabel from '../InputLabel/InputLabel';
import { TUiColors } from '@/Components/UI/Interface/TUiColors';
import { TLayer } from '../../Design/color/generateColorSteps';
import { getTextColor } from '../../Design/color/colorCalculatorForComponet';
import { TTheme } from '@/Components/UI/Interface/TTheme';

export type TAlign = 'left' | 'center';

export interface IAlignedInputLabel {
  $align?: TAlign;
  $colorState?: 'error' | 'active' | 'default';
  theme?: TTheme;
  $themeType?: TUiColors;
  $layer?: TLayer;
}
//the aligned label is only with align left or centerd {align?: string; active?: boolean}
export const AlignedInputLabel = styled(InputLabel)<IAlignedInputLabel>`
  display: flex;
  align-items: flex-end;
  margin-bottom: ${({theme}) => theme.spacing.xxs};
  justify-content: ${({ $align }) => ($align === 'left' ? 'flex-start' : $align === 'center' ? 'center' : 'flex-end')};
  color: ${({ $colorState, theme, $themeType = 'secondary', $layer = 4 }) => {
    switch ($colorState) {
      case 'error':
        return theme.colors.error[0];
      case 'active':
        return theme.colors.accent[0];
      default:
        return getTextColor({ theme, $themeType, $textLayer: $layer });
    }
  }};
`;

export default AlignedInputLabel;


