import { styled, css } from 'styled-components';

import { spacingPx } from '../../Design/design';
import { textShadow } from '../../Design/shadows';
import themeStore from '../../Design/color/themeStore';
import { TUiColorsType } from '../../Design/color/designColor';
import { TLayer } from '../../Design/color/generateColorSteps';
import { getTextColor } from '../../Design/color/colorCalculatorForComponet';
import { tabSwitchSizes } from '../../Molecules/FancyTabSwitch/FancyTabSwitch';
import { TypographyList } from '../Typography/Typography';

export const tabSwitchItemSizes = {
  sm: {
    fontSize: 'content' as keyof typeof TypographyList,
    padding: spacingPx.xxs,
  },
  md: {
    fontSize: 'button' as keyof typeof TypographyList,
    padding: spacingPx.sm,
  },
  lg: {
    fontSize: 'button' as keyof typeof TypographyList,
    padding: spacingPx.sm,
  },
};

// ------------------------------------------------------------------ //
// ----------- the helperfunctions for the style generate ----------- //
// ------------------------------------------------------------------ //
//generates the style from the dynamic values of the tab

interface IListButtonStyle {
  $transparent?: boolean;
  $wide?: boolean;
  $textColor?: keyof TUiColorsType;
  $iconAlign?: 'left' | 'right';
  theme: TUiColorsType;
  $themeType?: keyof TUiColorsType;
  $layer?: TLayer;
  $size?: keyof typeof tabSwitchSizes;
  $hasLabel?: boolean;
  $hasIcon?: boolean;
}

type TGenerateDynamicTabStyle = Pick<IListButtonStyle, '$transparent' | '$textColor' | '$layer' | 'theme' | '$themeType'>;
const generateDynamicTabStyle = (props: TGenerateDynamicTabStyle) => {
  const { $transparent, $textColor = 'secondary', theme, $layer = 0 } = props;
  const darkTheme = themeStore.getState().isDarkTheme;

  //if the background not transparent give him a background/text color
  if (!$transparent) {
    return css`
      color: ${darkTheme
        ? getTextColor({ theme, $themeType: $textColor, $textLayer: $layer })
        : getTextColor({ theme, $themeType: $textColor, $textLayer: $layer })};
    `;
  } else {
    //when the it is transparent style it with underline
    return css`
      color: ${getTextColor({ theme, $themeType: $textColor, $textLayer: $layer })};
      background-color: transparent;
      border-bottom: 1.5px solid transparent;
    `;
  }
};

//when the item is aktiv(clicked) this style is used
const generateCheckedStyle = (props: Pick<IListButtonStyle, '$transparent'>) => {
  const { $transparent } = props;
  const theme = themeStore.getState().theme;

  return css`
    ${!$transparent
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
          padding-left: ${spacingPx.xs};
          order: 1;
        `;
      default:
      case 'left':
        return css`
          padding-right: ${spacingPx.xs};
        `;
    }
  };

  console.log('align', getAlignment(), $iconAlign);

  return css`
    i {
      display: flex;
      justify-content: center;
      ${getAlignment()}

      svg {
        width: 24px;
        height: 24px;
      }
    }
  `;
};

// ------------------------------------------------------------------ //
// ------------ the main style generator for the li item ------------ //
// ------------------------------------------------------------------ //
const generateButtonStyle = (props: IListButtonStyle) => {
  const { $wide, $textColor, $transparent, theme, $layer, $themeType, $iconAlign, $size, $hasIcon, $hasLabel } = props;

  return css`
    list-style: none;
    width: ${$wide ? `100%` : `auto`};

    label {
      display: flex;
      flex-direction: row;
      justify-content: center;
      box-sizing: border-box;
      align-items: center;
      text-align: center;
      cursor: pointer;
      width: 100%;
      user-select: none;
      padding: ${$wide ? `${tabSwitchItemSizes[$size || 'sm'].padding} 0px` : `${tabSwitchItemSizes[$size || 'sm'].padding}`};
      //handles the dynamic values
      ${generateDynamicTabStyle({ $transparent, $textColor, theme, $layer, $themeType })}
      // generates underlying childs in this element
      ${$hasIcon && $hasLabel && generateIconAlignment({ $iconAlign })}
    }

    input {
      display: none;
    }
  `;
};

export const LISwitchButtonStyle = styled.div<IListButtonStyle>`
  ${generateButtonStyle}
`;
