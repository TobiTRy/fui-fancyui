import { styled } from "styled-components";


import { TUiColorsType } from "../../Design/color/designColor";
import { TLayer } from "../../Design/color/generateColorSteps";
import { getBackgroundColor } from "../../Design/color/colorCalculatorForComponet";
import { disabledStyle } from "../../HelperFunctions/designFunctions/disableStyle";
import { spacingPx } from "../../Design/design";

interface IContentWrapper {
  $isActive?: boolean;
  $disabled?: boolean;
  theme: TUiColorsType;
  $themeType?: keyof TUiColorsType;
  $layer?: TLayer;
}

export const ContentWrapper = styled.div<IContentWrapper>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 78px;
  min-height: 32px;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  margin: 0 auto;
  color: ${({ $isActive, theme, $layer = 0, $themeType = 'secondary' }) =>
    $isActive ? theme.accent[0] : getBackgroundColor({ theme, $themeType, $layer })};
  transition: all 0.3s ease-in-out;
  ${({ $disabled }) => $disabled && disabledStyle}
  padding-bottom: ${spacingPx.xs};
  text-decoration: none;

  /* This is a media query that tests if the primary input mechanism of the device (e.g., mouse or touch screen) is capable of hovering  */
  @media (hover: hover) {
    &:hover {
      color: ${({ $disabled, theme }) => !$disabled && theme.accent[0]};
    }
  }
`;