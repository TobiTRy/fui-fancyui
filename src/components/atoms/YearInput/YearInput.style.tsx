import { styled } from 'styled-components';
import { TTheme } from '@/types/TTheme';
import { TComponentSizes } from '@/types/TComponentSizes';

import { sizeSettings } from './sizeSettings';

export const StyledInput = styled.div<{ theme: TTheme; $sizeC: TComponentSizes }>`
  input {
    ${({ theme, $sizeC }) => theme.fontSizes[sizeSettings[$sizeC].fontSize]};
    width: 4.1ch;
  }
`;
