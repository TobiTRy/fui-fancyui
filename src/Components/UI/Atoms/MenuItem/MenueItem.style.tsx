import styled from 'styled-components';
import { getBackgroundColor } from '../../Design/color/colorCalculatorForComponet';
import { TUiColorsType } from '../../Design/color/designColor';
import { TLayer } from '../../Design/color/generateColorSteps';

type StyledMenuProps = {
  $themeType?: keyof TUiColorsType;
  $layer?: TLayer;
  theme: TUiColorsType;
};

export const MenuItem = styled.div<StyledMenuProps>`
  display: flex;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme, $themeType, $layer }) =>
      getBackgroundColor({ theme, $themeType: $themeType ?? 'primary', $layer: $layer ?? 3 })};
  }
`;
