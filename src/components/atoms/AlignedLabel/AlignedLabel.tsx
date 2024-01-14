import { styled } from 'styled-components';

import { IAlignedLabel } from '@/components/atoms/AlignedLabel/TAlinedLabel.model';
import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent';
import { TTextAlignLRC } from '@/types/TTextAlignLRC';

const leftRightCenterToFlexJustify: Record<TTextAlignLRC, string> = {
  left: 'flex-start',
  right: 'flex-end',
  center: 'center',
};

//the aligned label is only with align left or centerd {align?: string; active?: boolean}
export const AlignedLabel = styled.label<IAlignedLabel>`
  display: flex;
  align-items: flex-end;
  justify-content: ${({ $align }) => ($align ? leftRightCenterToFlexJustify[$align] : 'flex-start')};
  color: ${({ $systemMessageType, theme, $themeType = 'secondary', $layer }) =>
    getBackgroundColor({
      theme,
      $themeType: $systemMessageType ? $systemMessageType : $themeType,
      $layer: $layer,
    })};
`;

export default AlignedLabel;
