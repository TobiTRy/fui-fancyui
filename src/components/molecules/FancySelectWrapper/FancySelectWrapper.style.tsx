import { CSSProp, css, styled } from 'styled-components';

import { TTheme } from '@/types/TTheme';
import { TTextAlignLRC } from '@/types/TTextAlignLRC';
import { TTextAlignLR } from '@/types/TTextAlignLR';
import { TLeftRightCenterToFlexJustify } from '@/design/designFunctions/leftRightCenterToFlexJustify';
import { TSpacings } from '@/types';
import { disabledStyle } from '@/design/designFunctions/disabledStyle';

// this wraps the label and the description
// handle the order of the checkbox and label/description
type TLabelWrapper = {
  $align?: TTextAlignLRC | 'space-between';
  $justifyContent?: TLeftRightCenterToFlexJustify;
  $externalStyle: CSSProp;
  $gap?: TSpacings;
  theme: TTheme;
  $disabled?: boolean;
};
export const LabelWrapper = styled.label<TLabelWrapper>`
  display: flex;
  gap: ${({ $gap, theme }) => ($gap ? theme.spacing[$gap] : theme.spacing.xs)};
  justify-content: ${({ $align }) => {
    switch ($align) {
      case 'left':
        return 'flex-start';
      case 'right':
        return 'flex-end';
      case 'center':
        return 'center';
      case 'space-between':
        return 'space-between';
    }
  }};
  ${({ $externalStyle }) => $externalStyle}
  ${({ $disabled }) => $disabled && disabledStyle}

  .description {
    margin-left: ${({ theme }) => parseInt(theme.spacing.xxs) - 2 + 'px'};
  }
`;

export const InputWrapper = styled.div<{ $alignInput?: TTextAlignLR; theme: TTheme }>`
  margin-top: ${({ theme }) => parseInt(theme.spacing.xxs) - 2 + 'px'};
  height: fit-content;

  ${({ $alignInput }) =>
    $alignInput === 'right'
      ? css`
          order: 1;
        `
      : css`
          order: -1;
        `};
`;
