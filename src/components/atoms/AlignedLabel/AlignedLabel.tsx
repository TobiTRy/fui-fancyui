import { styled } from 'styled-components';

import InputLabel from '../InputLabel/InputLabel';
import { IAlignedLabel } from '@/components/atoms/AlignedLabel/TAlinedLabel.model';
import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent';

//the aligned label is only with align left or centerd {align?: string; active?: boolean}

export const AlignedLabel = styled(InputLabel)<IAlignedLabel>`
  display: flex;
  align-items: flex-end;
  margin-bottom: ${({ theme }) => theme.spacing.xxs};
  justify-content: ${({ $align }) => ($align === 'left' ? 'flex-start' : $align === 'center' ? 'center' : 'flex-end')};
  color: ${({ $systemMessageType, theme, $isActive, $themeType = 'secondary', $layer }) =>
    getBackgroundColor({
      theme,
      $themeType: $systemMessageType ? $systemMessageType : $isActive ? 'accent' : $themeType,
      $layer: $isActive ? 0 : $layer,
    })};
`;

export default AlignedLabel;
