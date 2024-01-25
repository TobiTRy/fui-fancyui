import { CSSProp, css, styled } from 'styled-components';

import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent';
import { themeStore } from '@/design/theme/themeStore';
import { TLayer } from '@/types/TLayer';
import { TTheme } from '@/types/TTheme';
import { tabSwitchItemSizes } from './sizeSettings';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

// ------------------------------------------------------------------ //
// ----------- the helperfunctions for the style generate ----------- //
// ------------------------------------------------------------------ //
//generates the style from the dynamic values of the tab
interface IListButtonStyle {
  $textColor?: TUiColorsNotTransparent;
  $iconAlign?: 'left' | 'right';
  theme: TTheme;
  $layer?: TLayer;
  $size?: keyof typeof tabSwitchItemSizes;
  $hasLabel?: boolean;
  $hasIcon?: boolean;
  $externalStyle?: CSSProp;
}

//this functions hold litle childs for the label
const generateIconAlignment = (props: Pick<IListButtonStyle, '$iconAlign'>) => {
  const { $iconAlign } = props;
  const getSpacingFromTheme = themeStore.getState().theme.spacing;

  const getAlignment = () => {
    switch ($iconAlign) {
      case 'right':
        return css`
          gap: ${getSpacingFromTheme.xs};
          order: 1;
        `;
      default:
      case 'left':
        return css`
          gap: ${getSpacingFromTheme.xs};
        `;
    }
  };

  return css`
    ${getAlignment()}
    i {
      display: flex;
      justify-content: center;
    }
  `;
};

// ------------------------------------------------------------------ //
// ------------ the main style generator for the li item ------------ //
// ------------------------------------------------------------------ //
export const SwitchButtonStyle = styled.div<IListButtonStyle>`
  list-style: none;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;

  label {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    box-sizing: border-box;
    align-items: center;
    text-align: center;
    cursor: pointer;
    user-select: none;
    padding: ${({ $size, theme }) => `${tabSwitchItemSizes[$size || 'sm'].padding} ${theme.spacing.md}`};
    color: ${({ theme, $textColor = 'secondary', $layer }) =>
      getBackgroundColor({ theme, $themeType: $textColor, $layer })};
    ${({ $hasIcon, $hasLabel, $iconAlign }) => $hasIcon && $hasLabel && generateIconAlignment({ $iconAlign })}
    will-change: transform; // ís needed for safari to prevent icons jumping tested on the iphone 18.12.23 newest versions
  }

  input {
    display: none;
  }
  ${({ $externalStyle }) => $externalStyle};
`;
