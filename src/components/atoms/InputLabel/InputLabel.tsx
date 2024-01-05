import { styled } from 'styled-components';

import { TTheme } from '@/types/TTheme';
import { TLayer } from '@/types/TLayer';
import { TThemeTypesNotTransparent } from '@/types/TThemeTypesNotTransparent';
import { getTextColor } from '@/design/designFunctions/colorCalculatorForComponent';

// --------------------------------------------------------------------------- //
// --------------- The main label design for the input elements -------------- //
// --------------------------------------------------------------------------- //
export interface IInputLabel {
  theme: TTheme;
  $layer?: TLayer;
  $themeType?: TThemeTypesNotTransparent;
}

const InputLabel = styled.label<IInputLabel>`
  color: ${({ theme, $layer, $themeType }) =>
    getTextColor({ theme, $themeType: $themeType ?? 'secondary', $textLayer: $layer ?? 1 })};
  font-weight: bold;
  pointer-events: none;
  user-select: none;
  transition: 0.3s;
  transition-timing-function: cubic-bezier(0.46, 0.03, 0.52, 0.96);
`;

InputLabel.displayName = 'InputLabel';

export default InputLabel;
