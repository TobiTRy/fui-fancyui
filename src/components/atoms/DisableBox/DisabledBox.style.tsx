import { css, styled } from 'styled-components';
import { TStyledPrefixAndPicker } from '@/types/TStyledPrefixAndPicker';
import { TDisabledStyleBox } from '@/components/atoms/DisableBox/DisabledBox';
import { disabledStyle } from '@/design/designFunctions/disabledStyle';

type TStyledDisabledStyleBox = TStyledPrefixAndPicker<TDisabledStyleBox>;
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
