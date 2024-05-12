import { styled } from 'styled-components';

import { TTheme } from '@/types/TTheme';
import { IAvailableDot } from './IAvailableDot.model';

// --------------------------------------------------------------------------- //
// ---------- A little Circle that indicates if something is avilable -------- //
// --------------------------------------------------------------------------- //
const AvailableDot = styled.div<{ $available?: IAvailableDot; theme?: TTheme }>`
  width: 4px;
  height: 4px;
  border-radius: ${({ theme }) => theme.borderRadius.complete};
  background-color: ${({ $available = 'completly', theme }) => {
    switch ($available) {
      case 'completly':
        return theme.color.success[0];
      case 'partially':
        return theme.color.warning[0];
      case 'not':
        return theme.color.error[0];
      case 'transparent':
        return 'transparent';
    }
  }};
`;

AvailableDot.displayName = 'AvailableDot';

export default AvailableDot;
