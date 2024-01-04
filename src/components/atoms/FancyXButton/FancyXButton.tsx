import Color from 'color';
import { styled } from 'styled-components';

import { simpleColorTransition } from '@/design/designFunctions/simpleColorTransition';
import { TThemeTypesNotTransparent } from '@/types/TThemeTypesNotTransparent';
import { TLayer } from '@/types/TLayer';
import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent';
import { TTheme } from '@/types/TTheme';
import { SVGXlg } from '@/components/icons/SVGXlg';

// --------------------------------------------------------------------------- //
// --------------- The main Component for the X Close Button------- ---------- //
// --------------------------------------------------------------------------- //
interface IFancyXButton {
  onClick?: () => void;
  themeType?: TThemeTypesNotTransparent;
  layer?: TLayer;
}
export default function FancyXButton({ onClick, themeType, layer }: IFancyXButton) {
  //check wich design comes in and add the right color object uiColor or systemMessages  to the button
  return (
    <StyledFancyXButton onClick={onClick} $themeType={themeType} $layer={layer}>
      <SVGXlg />
    </StyledFancyXButton>
  );
}

// ------------------------------------------- //
// ------- The style for the component ------- //
// ------------------------------------------- //
interface IStyledFancyXButton {
  $themeType?: TThemeTypesNotTransparent;
  $layer?: TLayer;
  theme: TTheme;
}
const StyledFancyXButton = styled.button<IStyledFancyXButton>`
  padding: 0 ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.xxs};
  background: none;
  color: ${({ $themeType = 'accent', theme, $layer }) => getBackgroundColor({ $themeType, theme, $layer })};
  border: none;
  font-weight: bolder;
  cursor: pointer;
  outline: none;
  ${simpleColorTransition}

  &:hover {
    color: ${({ $themeType = 'accent', $layer, theme }) =>
      Color(getBackgroundColor({ $themeType, $layer, theme })).darken(0.1).hex()};
  }
`;
