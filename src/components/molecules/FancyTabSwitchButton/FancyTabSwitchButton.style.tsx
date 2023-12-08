import { CSSProp, css, styled } from 'styled-components';

import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent';
import { themeStore } from '@/design/theme/themeStore';
import { TLayer } from '@/interface/TLayer';
import { TTheme } from '@/interface/TTheme';
import { TThemeTypes } from '@/interface/TThemeTypes';
import { tabSwitchItemSizes } from './sizeSettings';

// ------------------------------------------------------------------ //
// ----------- the helperfunctions for the style generate ----------- //
// ------------------------------------------------------------------ //
//generates the style from the dynamic values of the tab
interface IListButtonStyle {
  $wide?: boolean;
  $textColor?: TThemeTypes;
  $iconAlign?: 'left' | 'right';
  theme: TTheme;
  $themeType?: TThemeTypes;
  $layer?: TLayer;
  $size?: keyof typeof tabSwitchItemSizes;
  $hasLabel?: boolean;
  $hasIcon?: boolean;
  $externalStyle?: CSSProp;
}

type TGenerateDynamicTabStyle = Pick<IListButtonStyle, '$textColor' | '$layer' | 'theme' | '$themeType'>;
const generateDynamicTabStyle = (props: TGenerateDynamicTabStyle) => {
  const { $textColor = 'secondary', theme, $themeType, $layer = 0 } = props;
  const darkTheme = themeStore.getState().isDarkTheme;

  //if the background not transparent give him a background/text color
  if ($themeType !== 'transparent') {
    return css`
      color: ${darkTheme
        ? getBackgroundColor({ theme, $themeType: $textColor, $layer })
        : getBackgroundColor({ theme, $themeType: $textColor, $layer })};
    `;
  } else {
    //when the it is transparent style it with underline
    return css`
      color: ${getBackgroundColor({ theme, $themeType: $textColor, $layer })};
    `;
  }
};

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
const generateButtonStyle = (props: IListButtonStyle) => {
  const { $wide, $textColor, theme, $layer, $themeType, $iconAlign, $size, $hasIcon, $hasLabel } = props;
  const getSpacingFromTheme = themeStore.getState().theme.spacing;

  return css`
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
      padding: ${$wide
        ? `${tabSwitchItemSizes[$size || 'sm'].padding} ${getSpacingFromTheme.md}`
        : `${tabSwitchItemSizes[$size || 'sm'].padding} ${
            parseInt(tabSwitchItemSizes[$size || 'sm'].padding) + 7 + 'px'
          }`};
      //handles the dynamic values
      ${generateDynamicTabStyle({ $themeType, $textColor, theme, $layer })}
      // generates underlying childs in this element
      ${$hasIcon && $hasLabel && generateIconAlignment({ $iconAlign })}
    }

    input {
      display: none;
    }
  `;
};

export const SwitchButtonStyle = styled.div<IListButtonStyle>`
  ${generateButtonStyle}
  ${({ $externalStyle }) => $externalStyle}
`;
