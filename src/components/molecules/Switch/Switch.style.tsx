import styled from 'styled-components';

import { TSwitch } from '@/components/molecules/Switch/Switch.model';
import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent';
import getThemeOrValueAsCSS from '@/design/designFunctions/getThemeOrValueAsCss/getThemeOrValueAsCss';
import { TStyledPrefixAndPicker } from '@/types';
import { TTheme } from '@/types/TTheme';
import { sizeSettings } from './sizeSettings';
import { focusStyle } from '@/design/designFunctions/focusStyle';

type TSwitchTrack = TStyledPrefixAndPicker<
  TSwitch,
  'checked' | 'sizeC' | 'disabled' | 'themeType' | 'externalStyle' | 'layer'
>;

export const SwitchTrack = styled.div<TSwitchTrack & { theme: TTheme }>`
  position: relative;
  display: inline-block;
  width: calc(${(props) => getThemeOrValueAsCSS(sizeSettings[props.$sizeC || 'md'].height, 'elementSize')} * 1.7);
  height: ${(props) => getThemeOrValueAsCSS(sizeSettings[props.$sizeC || 'md'].height, 'elementSize')};
  background-color: ${({ $checked, theme, $themeType, $layer }) =>
    $checked ? getBackgroundColor({ theme, $themeType, $layer }) : theme.color.secondary[7]};
  border-radius: ${getThemeOrValueAsCSS('complete', 'borderRadius')};
  transition: all 0.2s ease-in-out;
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.$disabled ? 0.5 : 1)};
  border: none;
  outline: none;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: ${({ $checked, $sizeC }) => {
      const padding = `calc((${getThemeOrValueAsCSS(sizeSettings[$sizeC || 'md'].height, 'elementSize')} - ${getThemeOrValueAsCSS(sizeSettings[$sizeC || 'md'].thumbSize, 'elementSize')}) / 2)`;
      return $checked
        ? `calc(100% - ${getThemeOrValueAsCSS(sizeSettings[$sizeC || 'md'].thumbSize, 'elementSize')} - ${padding})`
        : padding;
    }};
    width: ${({ $sizeC }) => getThemeOrValueAsCSS(sizeSettings[$sizeC || 'md'].thumbSize, 'elementSize')};
    height: ${({ $sizeC }) => getThemeOrValueAsCSS(sizeSettings[$sizeC || 'md'].thumbSize, 'elementSize')};
    background-color: ${({ theme }) => getBackgroundColor({ theme, $themeType: 'secondary', $layer: 0 })};
    border-radius: 50%;
    transition: all 0.2s ease-in-out;
    pointer-events: none;
    z-index: 2;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  }

  input {
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
  }

  &:has(input:focus-visible) {
    ${focusStyle}
  }

  ${(props) => props.$externalStyle}
`;

type TIconContainer = TStyledPrefixAndPicker<TSwitch, 'checked' | 'sizeC'> & { theme: TTheme };

export const IconContainer = styled.div<TIconContainer>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 1;
  transition: all 0.2s ease-in-out;
  gap: ${getThemeOrValueAsCSS('xs', 'spacing')};

  svg {
    width: calc(${({ $sizeC }) => getThemeOrValueAsCSS(sizeSettings[$sizeC || 'md'].thumbSize, 'elementSize')} / 1.5);
    height: calc(${({ $sizeC }) => getThemeOrValueAsCSS(sizeSettings[$sizeC || 'md'].thumbSize, 'elementSize')} / 1.5);
    color: ${({ $checked, theme }) =>
      $checked ? getBackgroundColor({ theme, $themeType: 'secondary', $layer: 0 }) : theme.color.secondary[7]};
    transition: all 0.2s ease-in-out;
  }
`;

type TIconWrapper = TStyledPrefixAndPicker<TSwitch, 'checked'>;

export const IconWrapper = styled.span<TIconWrapper>`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.1s ease-in-out;
`;
