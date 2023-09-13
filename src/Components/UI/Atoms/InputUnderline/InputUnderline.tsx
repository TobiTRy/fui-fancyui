import React from 'react';
import { styled, css } from 'styled-components';

import { colorPalet } from '../../Design/design';
import IStyledPrefixAndPicker from '../../Interface/IStyledPrefixAndPicker.model';
import { TUiColorsType } from '../../Design/color/designColor';

// Define the styled component for the underline
type IStyledUnderline = IStyledPrefixAndPicker<IFancyUnderline>;
const UnderLine = styled.i<IStyledUnderline & { theme: TUiColorsType }>`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  border-radius: 5px;
  background: ${({ theme }) => theme.secondary[7]};
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
      if ($colorState === 'error') return css`linear-gradient(90deg, ${colorPalet.red_dark}, ${colorPalet.red_light})`;
      if ($colorState === 'active') return css`linear-gradient(90deg, ${theme.accent[0]}, ${theme.accent[0]})`;
      if ($colorState === 'default') return css`linear-gradient(90deg, ${theme.secondary[7]}, ${theme.secondary[7]})`;
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
}
// --------------------------------------------------------------------------- //
// --------- The underline for the input components with state style --------- //
// --------------------------------------------------------------------------- //
export default function FancyInputUnderline(props: IFancyUnderline) {
  const { colorState = 'default', isActive, autoWidth } = props;

  // Render the FancyInputUnderline component with the appropriate props
  return <UnderLine $colorState={colorState} $isActive={isActive} $autoWidth={autoWidth} />;
}
