import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent';
import { TLayer } from '@/types/TLayer';
import { TStyledPrefixAndPicker } from '@/types/TStyledPrefixAndPicker';
import { TTheme } from '@/types/TTheme';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

import { styled } from 'styled-components';

type TRawTextArea = {
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
};

export type TRawTextAreaWithHTMLAttrs = TRawTextArea & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

type TRawTextAreaWith$ = TStyledPrefixAndPicker<TRawTextArea>;

const RawTextArea = styled.textarea<TRawTextAreaWith$ & { theme: TTheme }>`
  border: none;
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  color: ${({ theme, $themeType = 'secondary', $layer }) => getBackgroundColor({ theme, $themeType, $layer })};
`;

export default RawTextArea;
