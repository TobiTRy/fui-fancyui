import { styled, css } from 'styled-components';
import themeStore from '../../Design/color/themeStore';

import { spacingPx } from '../../Design/design';
import { TUiColorsType } from '../../Design/color/designColor';
import { TLayer } from '../../Design/color/generateColorSteps';
import { getBackgroundColor } from '../../Design/color/colorCalculatorForComponet';
import { TypographyList } from '../../Atoms/Typography/Typography';

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
        ? `${tabSwitchItemSizes[$size || 'sm'].padding} ${spacingPx.md}`
        : `${tabSwitchItemSizes[$size || 'sm'].padding} ${parseInt(tabSwitchItemSizes[$size || 'sm'].padding) + 7 + 'px'}`};
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
