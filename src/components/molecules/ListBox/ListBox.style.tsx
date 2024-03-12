import { css } from 'styled-components';

import { TTheme } from '@/types/TTheme';

import { TListBox } from '@/components/molecules/ListBox/ListBox';
import { arrayToCssValues } from '@/design/designFunctions/arrayToCssValues';
import { boxShadow } from '@/design/designFunctions/shadows';
import { TStyledPrefixAndPicker } from '@/types/TStyledPrefixAndPicker';

type TgenerateFancyBoxStyle = TStyledPrefixAndPicker<
  TListBox,
  'sizeC' | 'externalStyle' | 'borderRadius' | 'boxShadow'
>;

export const generateFancyBoxStyle = (props: TgenerateFancyBoxStyle) => {
  const { $sizeC, $externalStyle, $borderRadius, $boxShadow } = props;

  return css<{ theme: TTheme }>`
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    border-radius: ${({ theme }) => arrayToCssValues($borderRadius, 'borderRadius')};
    ${$boxShadow && boxShadow.md};

    ${$externalStyle}
  `;
};
