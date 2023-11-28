import { styled, css } from 'styled-components';

import { boxShadow } from '../../Design/shadows/shadows';
import { TThemeTypes } from '@/Components/UI/Interface/TUiColors';
import { TLayer } from '@/Components/UI/Interface/TLayer';
import { getBackgroundColor } from '../../Design/color/colorCalculatorForComponet';
import { TTheme } from '@/Components/UI/Interface/TTheme';

// eslint-disable-next-line react-refresh/only-export-components
const DragableThumb = css<{ theme: TTheme }>`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.accent[0]};
  cursor: ew-resize;
  ${boxShadow.sm}
  transition: background 0.1s ease-in-out;
  border: none;
`;

export const StyledRawSlider = styled.input<{ theme: TTheme; $themeType?: TThemeTypes; $layer?: TLayer }>`
  -webkit-appearance: none;
  width: 100%;
  margin: 0;
  height: 4px;
  margin: 10px 0 12px 0;
  background: ${({ theme, $themeType = 'secondary', $layer = 4 }) => getBackgroundColor({ theme, $themeType, $layer })};
  border-radius: 5px;
  background-image: ${({ theme }) => `linear-gradient(90deg, ${theme.colors.accent[0]}, ${theme.colors.accent[1]})`};
  background-size: 70% 100%;
  background-repeat: no-repeat;
  outline: none;

  /* Chrome */
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    ${DragableThumb}
  }

  /* Firefox */
  &::-moz-range-thumb {
    ${DragableThumb}
  }

  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }
`;
