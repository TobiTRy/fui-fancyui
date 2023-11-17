import { styled } from 'styled-components';
import { TUiColorsType } from '../../Design/color/designColor';

// --------------------------------------------------------------------------- //
// --------------- The main label design for the input elements -------------- //
// --------------------------------------------------------------------------- //
const InputLabel = styled.label<{theme?: TUiColorsType}>`
  width: 100%;
  color: ${({theme}) => theme.colors.secondary[1]};
  font-weight: bold;
  pointer-events: none;
  user-select: none;
  transition: 0.3s;
  transition-timing-function: cubic-bezier(0.46, 0.03, 0.52, 0.96);
  letter-spacing: 0.8px;
`;

InputLabel.displayName = 'InputLabel';

export default InputLabel;
