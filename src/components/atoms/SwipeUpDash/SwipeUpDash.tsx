import { styled } from 'styled-components';

import { TTheme } from '@/types/TTheme';
import simpleColorTransition from '@/design/designFunctions/simpleColorTransition/simpleTransition';

// --------------------------------------------------------------------------- //
// ---- The SwipeUpDash component is a simple horizontal line as Button ------ //
// --------------------------------------------------------------------------- //
export default function SwipeUpDash() {
  return (
    <StyledButton>
      <StyledSwipeUpDash />
    </StyledButton>
  );
}

// ------------------------------------------- //
// ------- The style for the component ------- //
// ------------------------------------------- //
const StyledSwipeUpDash = styled.div<{ theme: TTheme }>`
  width: 50px;
  height: 3px;
  background-color: ${({ theme }) => theme.colors.secondary[0]};
  border-radius: 3px;
`;

const StyledButton = styled.button`
  font-weight: bold;
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-top: 1rem;
  margin-bottom: 1rem;
  ${simpleColorTransition}
`;
