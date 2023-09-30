import { styled, css } from 'styled-components';

import { spacingPx } from '../../Design/design';
import { textShadow } from '../../Design/shadows';
import themeStore from '../../Design/color/themeStore';
import { TUiColorsType } from '../../Design/color/designColor';
import { TLayer } from '../../Design/color/generateColorSteps';
import { getTextColor } from '../../Design/color/colorCalculatorForComponet';
import { TypographyList } from '../Typography/Typography';

export const tabSwitchItemSizes = {
  sm: {
    fontSize: 'smText' as keyof typeof TypographyList,
    padding: spacingPx.xs,
  },
  md: {
    fontSize: 'content' as keyof typeof TypographyList,
    padding: spacingPx.sm,
  },
  lg: {
    fontSize: 'button' as keyof typeof TypographyList,
    padding: spacingPx.md,
  },
};

// ------------------------------------------------------------------ //
// ----------- the helperfunctions for the style generate ----------- //
// ------------------------------------------------------------------ //
//generates the style from the dynamic values of the tab

interface IListButtonStyle {
  $wide?: boolean;
  $textColor?: keyof TUiColorsType;
  $iconAlign?: 'left' | 'right';
  theme: TUiColorsType;
  $themeType?: keyof TUiColorsType;
  $layer?: TLayer;
  $size?: keyof typeof tabSwitchItemSizes;
  $hasLabel?: boolean;
  $hasIcon?: boolean;
}

type TGenerateDynamicTabStyle = Pick<IListButtonStyle, '$textColor' | '$layer' | 'theme' | '$themeType'>;
const generateDynamicTabStyle = (props: TGenerateDynamicTabStyle) => {
  const { $textColor = 'secondary', theme, $themeType, $layer = 0 } = props;
  const darkTheme = themeStore.getState().isDarkTheme;

  //if the background not transparent give him a background/text color
  if ($themeType !== 'transparent') {
    return css`
      color: ${darkTheme
        ? getTextColor({ theme, $themeType: $textColor, $textLayer: $layer })
        : getTextColor({ theme, $themeType: $textColor, $textLayer: $layer })};
    `;
  } else {
    //when the it is transparent style it with underline
    return css`
      color: ${getTextColor({ theme, $themeType: $textColor, $textLayer: $layer })};
    `;
  }
};

//when the item is aktiv(clicked) this style is used
const generateCheckedStyle = (props: Pick<IListButtonStyle, '$themeType'>) => {
  const { $themeType } = props;
  const theme = themeStore.getState().theme;

  return css`
    ${$themeType !== 'transparent'
      ? css`
          &:checked + label {
            ${textShadow.sm}
            background-color: ${theme.accent[0]};
          }
        `
      : css`
          &:checked + label {
            color: ${theme.accent[0]};
            border-bottom: 1.5px solid ${theme.accent[0]};
          }
        `}
  `;
};

//this functions hold litle childs for the label
const generateIconAlignment = (props: Pick<IListButtonStyle, '$iconAlign'>) => {
  const { $iconAlign } = props;

  const getAlignment = () => {
    switch ($iconAlign) {
      case 'right':
        return css`
          gap: ${spacingPx.xs};
          order: 1;
        `;
      default:
      case 'left':
        return css`
          gap: ${spacingPx.xs};
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

  return css`
    list-style: none;
    width: 100%;

    label {
      display: flex;
      flex-direction: row;
      justify-content: center;
      box-sizing: border-box;
      align-items: center;
      text-align: center;
      width: auto;
      cursor: pointer;
      user-select: none;
      padding: ${$wide ? `${tabSwitchItemSizes[$size || 'sm'].padding} 0px` : `${tabSwitchItemSizes[$size || 'sm'].padding}`};
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
`;
