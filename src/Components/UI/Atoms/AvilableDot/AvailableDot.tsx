import { styled } from 'styled-components';

import { borderRadius } from '../../Design/design';
import { TUiColorsType } from '../../Design/color/designColor';

// --------------------------------------------------------------------------- //
// ---------- A little Circle that indicates if something is avilable -------- //
// --------------------------------------------------------------------------- //
export type IAvailableDot = 'completly' | 'partially' | 'not' | 'transparent';
const AvailableDot = styled.div<{ $available?: IAvailableDot; theme: TUiColorsType }>`
  width: 4px;
  height: 4px;
  border-radius: ${borderRadius.complete};
  background-color: ${({ $available = 'completly', theme }) => {
    switch ($available) {
      case 'completly':
        return  theme.success[0];
      case 'partially':
        return theme.warning[0];
      case 'not':
        return theme.error[0];
      case 'transparent':
        return 'transparent';
    }
  }};
`;

AvailableDot.displayName = 'AvailableDot';

export default AvailableDot;

