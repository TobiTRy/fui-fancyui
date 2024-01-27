import { styled } from 'styled-components';

import { IAlignedLabel } from '@/components/atoms/AlignedLabel/TAlinedLabel.model';
import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent';
import { leftRightCenterToFlexJustify } from '@/design/designFunctions/leftRightCenterToFlexJustify';

//the aligned label is only with align left or centerd {align?: string; active?: boolean}
export const AlignedLabel = styled.label<IAlignedLabel>`
  display: flex;
  align-items: flex-end;
  justify-content: ${({ $align }) => leftRightCenterToFlexJustify[$align ?? 'left']};
  color: ${({ $systemMessageType, theme, $themeType = 'secondary', $layer }) =>
    getBackgroundColor({
      theme,
      $themeType: $systemMessageType ? $systemMessageType : $themeType,
      $layer: $layer,
    })};
`;

export default AlignedLabel;
