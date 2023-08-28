import { styled } from 'styled-components';
import { uiColors } from '../../Design/design';

// --------------------------------------------------------------------------- //
// --------------- The main label design for the input elements -------------- //
// --------------------------------------------------------------------------- //
const InputLabel = styled.label`
  width: 100%;
  color: ${uiColors.secondary.darkest};
  font-weight: bold;
  pointer-events: none;
  user-select: none;
  transition: 0.3s;
  transition-timing-function: cubic-bezier(0.46, 0.03, 0.52, 0.96);
  letter-spacing: 0.8px;
`;

export default InputLabel;
