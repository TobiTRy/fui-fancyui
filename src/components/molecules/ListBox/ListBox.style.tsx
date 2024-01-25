import { css } from 'styled-components';

import { TTheme } from '@/types/TTheme';

import { TListBox } from '@/components/molecules/ListBox/ListBox';
import IStyledPrefixAndPicker from '@/types/IStyledPrefixAndPicker';
import { sizeSettings } from './sizeSettings';

type TgenerateFancyBoxStyle = IStyledPrefixAndPicker<TListBox, 'size' | 'externalStyle' | 'borderRadius'>;

export const generateFancyBoxStyle = ({ $borderRadius, $externalStyle, $size }: TgenerateFancyBoxStyle) => css<{
  theme: TTheme;
}>`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  gap: ${({ theme }) => theme.spacing[sizeSettings[$size ?? 'md'].gap]};
  border-radius: ${({ theme }) =>
    $borderRadius ? theme.borderRadius[$borderRadius] : theme.borderRadius[sizeSettings[$size ?? 'md'].borderRadius]};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  ${$externalStyle}
`;
