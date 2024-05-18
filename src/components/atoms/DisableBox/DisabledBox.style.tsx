import { css, styled } from 'styled-components';

import { TStyledPrefixAndPicker } from '@/types/TStyledPrefixAndPicker';
import { TDisabledBox } from '@/components/atoms/DisableBox/TDisabled.model';
import { disabledStyle } from '@/design/designFunctions/disabledStyle';

type TStyledDisabledStyleBox = TStyledPrefixAndPicker<TDisabledBox>;
export const StyledDisabledBox = styled.div<TStyledDisabledStyleBox>`
  ${({ $disabled }) =>
    $disabled &&
    css`
      ${disabledStyle}
    `}

  ${({ $pointerEvents }) =>
    $pointerEvents &&
    css`
      pointer-events: ${$pointerEvents};
    `}
`;
