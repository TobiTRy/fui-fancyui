import { CSSProp, css, styled } from 'styled-components';

import { TThemeArrayOrValueCSS, arrayToCssValues } from '@/design/designFunctions/arrayToCssValues';
import { simpleColorTransition } from '@/design/designFunctions/simpleColorTransition';
import { themeStore } from '@/design/theme/themeStore';
import { TComponentSizes } from '@/types/TComponentSizes';
import { TLayer } from '@/types/TLayer';
import { TTheme } from '@/types/TTheme';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { sizeSettings } from './sizeSettings';

// ------------------------------------------------------------------ //
// ----------- the helperfunctions for the style generate ----------- //
// ------------------------------------------------------------------ //
//generates the style from the dynamic values of the tab
interface IListButtonStyle {
  $textColor?: TUiColorsNotTransparent;
  $iconAlign?: 'left' | 'right';
  $borderRadius?: TThemeArrayOrValueCSS;
  theme: TTheme;
  $layer?: TLayer;
  $sizeC: TComponentSizes;
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
    padding: ${({ $sizeC }) => arrayToCssValues(sizeSettings[$sizeC].padding, 'spacing')};
    ${({ $hasIcon, $hasLabel, $iconAlign }) => $hasIcon && $hasLabel && generateIconAlignment({ $iconAlign })}
    will-change: transform; // ís needed for safari to prevent icons jumping tested on the iphone 18.12.23 newest versions
    ${simpleColorTransition}
  }

  input {
    display: none;
  }
  ${({ $externalStyle }) => $externalStyle};
`;

//${theme.spacing.md}
