import { css } from 'styled-components';

import { TTheme } from '@/types/TTheme';

import { TListBox } from '@/components/molecules/ListBox/ListBox';
import IStyledPrefixAndPicker from '@/types/IStyledPrefixAndPicker';
import { sizeSettings } from './sizeSettings';
import { boxShadow } from '@/design/designFunctions/shadows';

type TgenerateFancyBoxStyle = IStyledPrefixAndPicker<
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
    border-radius: ${({ theme }) =>
      $borderRadius
        ? theme.borderRadius[$borderRadius]
        : theme.borderRadius[sizeSettings[$sizeC ?? 'md'].borderRadius]};
    ${$boxShadow && boxShadow.md};

    ${$externalStyle}
  `;
};
