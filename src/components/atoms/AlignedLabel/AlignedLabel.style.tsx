import { styled } from 'styled-components';

import { TAlignedLabelProps } from '@/components/atoms/AlignedLabel/TAlinedLabel.model';
import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent';
import { leftRightCenterToFlexJustify } from '@/design/designFunctions/leftRightCenterToFlexJustify';
import { TTheme } from '@/types/TTheme';
import { TStyledPrefixAndPicker } from '@/types/TStyledPrefixAndPicker';

//the aligned label is only with align left or centerd {align?: string; active?: boolean}
type TStyledAlignedLabel = TStyledPrefixAndPicker<TAlignedLabelProps> & { theme: TTheme };
export const StyledAlignedLabel = styled.label<TStyledAlignedLabel>`
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
