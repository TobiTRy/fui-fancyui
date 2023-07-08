import styled from 'styled-components';

// --------------------------------------------------------------------------- //
// --------------- The main label design for the input elements -------------- //
// --------------------------------------------------------------------------- //
const InputLabel = styled.label`
  width: 100%;
  color: gray;
  font-weight: bold;
  pointer-events: none;
  transition: 0.3s;
  user-select: none;
  transition-timing-function: cubic-bezier(0.46, 0.03, 0.52, 0.96);
  letter-spacing: 0.8px;
`;

export default InputLabel;