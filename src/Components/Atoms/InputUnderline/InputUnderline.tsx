import React from 'react';
import { styled, css } from 'styled-components';

import IStyledPrefixAndPicker from '../../Interface/IStyledPrefixAndPicker.model';
import { TThemeTypes } from '@/Components/Interface/TUiColors';
import { TLayer } from '@/Components/Interface/TLayer';
import { getBackgroundColor } from '../../Design/color/colorCalculatorForComponet';
import { TTheme } from '@/Components/Interface/TTheme';

// Define the styled component for the underline
type IStyledUnderline = IStyledPrefixAndPicker<IFancyUnderline>;
const UnderLine = styled.i<IStyledUnderline & { theme: TTheme }>`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  border-radius: 5px;
  background: ${({ theme, $themeType = 'secondary', $layer }) => getBackgroundColor({ theme, $themeType, $layer })};
  overflow: hidden;
  width: 100%;

  // Define the styles for the gradient overlay
  &::before {
    content: '';
    width: 100%;
    border-radius: 5px;
    position: absolute;
    left: 0;
    bottom: 0;
    opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
    height: 100%;
    background: ${({ $colorState, theme }) => {
      if ($colorState === 'error') return css`linear-gradient(90deg, ${theme.colors.error[1]}, ${theme.colors.error[0]})`;
      if ($colorState === 'active') return css`linear-gradient(90deg, ${theme.colors.accent[1]}, ${theme.colors.accent[0]})`;
      if ($colorState === 'default') return css`linear-gradient(90deg, ${theme.colors.secondary[0]}, ${theme.colors.secondary[4]})`;
    }};

    // Define the transition styles for the gradient overlay
    transition: 0.25s;
    transition-timing-function: cubic-bezier(0.46, 0.03, 0.52, 0.96);
  }
`;

// Define the props for the FancyInputUnderline component
interface IFancyUnderline {
  colorState?: 'error' | 'active' | 'default';
  isActive?: boolean;
  autoWidth?: boolean;
  themeType?: TThemeTypes;
  layer?: TLayer;
}
// --------------------------------------------------------------------------- //
// --------- The underline for the input components with state style --------- //
// --------------------------------------------------------------------------- //
export default function FancyInputUnderline(props: IFancyUnderline) {
  const { colorState = 'default', isActive, autoWidth, layer = 4, themeType } = props;

  // Render the FancyInputUnderline component with the appropriate props
  return <UnderLine $colorState={colorState} $themeType={themeType} $layer={layer} $isActive={isActive} $autoWidth={autoWidth} />;
}
