import { styled } from 'styled-components';

import { systemMessages } from '../../Design/design';
import { borderRadius } from '../../Design/design';

// --------------------------------------------------------------------------- //
// ---------- A little Circle that indicates if something is avilable -------- //
// --------------------------------------------------------------------------- //
export type IAvilableDot = 'completly' | 'partially' | 'not' | 'transparent';
const AvilableDot = styled.div<{ $avilable: IAvilableDot }>`
  width: 4px;
  height: 4px;
  border-radius: ${borderRadius.complete};
  background-color: ${({ $avilable }) => {
    switch ($avilable) {
      case 'completly':
        return  systemMessages.success.light;
      case 'partially':
        return systemMessages.warning.light;
      case 'not':
        return systemMessages.error.light;
      default:
        return 'transparent';
    }
  }};
`;

export default AvilableDot;
