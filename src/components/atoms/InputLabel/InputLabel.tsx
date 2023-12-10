import { styled } from 'styled-components';

import { TTheme } from '@/interface/TTheme';
import { TLayer } from '@/interface/TLayer';
import { TThemeTypesNotTransparent } from '@/interface/TThemeTypesNotTransparent';
import { getTextColor } from '@/design/designFunctions/colorCalculatorForComponent';

// --------------------------------------------------------------------------- //
// --------------- The main label design for the input elements -------------- //
// --------------------------------------------------------------------------- //
interface IInputLabel {
  theme: TTheme;
  $layer?: TLayer;
  $themeType?: TThemeTypesNotTransparent;
}

const InputLabel = styled.label<IInputLabel>`
  width: 100%;
  color: ${({ theme, $layer, $themeType }) =>
    getTextColor({ theme, $themeType: $themeType ?? 'secondary', $textLayer: $layer ?? 1 })};
  font-weight: bold;
  pointer-events: none;
  user-select: none;
  transition: 0.3s;
  transition-timing-function: cubic-bezier(0.46, 0.03, 0.52, 0.96);
  letter-spacing: 0.8px;
`;

InputLabel.displayName = 'InputLabel';

export default InputLabel;
