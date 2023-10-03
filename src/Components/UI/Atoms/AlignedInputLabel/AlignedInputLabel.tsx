import { styled } from 'styled-components';
import InputLabel from '../InputLabel/InputLabel';
import { colorPalet, spacingPx } from '../../Design/design';
import { TUiColorsType } from '../../Design/color/designColor';
import { TLayer } from '../../Design/color/generateColorSteps';
import { getTextColor } from '../../Design/color/colorCalculatorForComponet';
import { HTMLAttributes } from 'react';

export type TAlign = 'left' | 'center' | 'right';

//the aligned label is only with align left or centerd {align?: string; active?: boolean}
const StyledInputLabel = styled(InputLabel)<IAlignedInputLabel>`
  display: flex;
  align-items: flex-end;
  margin-bottom: ${spacingPx.xxs};
  justify-content: ${({ $align }) => ($align === 'left' ? 'flex-start' : $align === 'center' ? 'center' : 'flex-end')};
  color: ${({ $colorState, theme, $themeType = 'secondary', $layer = 4 }) => {
    switch ($colorState) {
      case 'error':
        return colorPalet.red_light;
      case 'active':
        return theme.accent[0];
      default:
        return getTextColor({ theme, $themeType, $textLayer: $layer });
    }
  }};
`;

type TNativeLabelAttrs = HTMLAttributes<HTMLLabelElement>;
interface IAlignedInputLabel {
  $align?: TAlign;
  $colorState?: 'error' | 'active' | 'default';
  theme?: TUiColorsType;
  $themeType?: keyof TUiColorsType;
  $layer?: TLayer;
  children?: React.ReactNode;
  as?: React.ElementType;
  htmlFor?: string;
}

export default function AlignedInputLabel(props: IAlignedInputLabel & TNativeLabelAttrs) {
  console.log(props.$colorState);
  return <StyledInputLabel {...props}>{props.children}</StyledInputLabel>;
}
