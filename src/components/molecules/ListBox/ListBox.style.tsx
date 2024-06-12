import { css } from 'styled-components';

import { TTheme } from '@/types/TTheme';

import { TListBoxWithFancyBoxAttrs } from './TListBox.model';
import { boxShadow } from '@/design/designFunctions/shadows';
import { TStyledPrefixAndPicker } from '@/types/TStyledPrefixAndPicker';

type TgenerateFancyBoxStyle = TStyledPrefixAndPicker<TListBoxWithFancyBoxAttrs, 'externalStyle' | 'boxShadow'>;

export const generateFancyBoxStyle = (props: TgenerateFancyBoxStyle) => {
  const { $externalStyle, $boxShadow } = props;

  return css<{ theme: TTheme }>`
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    overflow: hidden;
    ${$boxShadow && boxShadow.md};

    ${$externalStyle}
  `;
};
