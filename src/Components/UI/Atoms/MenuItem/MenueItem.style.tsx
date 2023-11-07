import styled from 'styled-components';
import { getBackgroundColor, getTextColor } from '../../Design/color/colorCalculatorForComponet';
import { TUiColorsType } from '../../Design/color/designColor';
import { TLayer } from '../../Design/color/generateColorSteps';

type StyledMenuProps = {
  $themeType?: keyof TUiColorsType;
  $layer?: TLayer;
  theme: TUiColorsType;
};

export const MenuItem = styled.button<StyledMenuProps>`
  display: flex;
  box-sizing: border-box;
  padding: 10px 20px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${({ theme, $themeType, $layer }) =>
      getTextColor({ theme, $themeType: $themeType ?? 'secondary', $textLayer: $layer ?? 3 })};

  &:hover {
    background-color: ${({ theme, $themeType, $layer }) =>
      getBackgroundColor({ theme, $themeType: $themeType ?? 'primary', $layer: $layer ?? 3 })};
  }
`;
