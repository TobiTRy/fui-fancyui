import { styled, css } from 'styled-components';

import { TTheme } from '@/types/TTheme';
import { TUiColorsMain } from '@/types/TUiColorsMain';
import { TLayer } from '@/types/TLayer';
import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent';

// a consistant style for the checkbox and the fake checkbox
const checkboxStyles = css`
  width: 20px;
  height: 20px;
  border-radius: 4px;
`;

// the real chekbox but its hidden and the fake one is shown
export const HidenCheckBox = styled.input`
  margin: 0;
  position: absolute;
  cursor: pointer;
  opacity: 1;
  background-color: transparent;
  z-index: 0;
  appearance: none;
  outline: none;
  ${checkboxStyles}
  margin: 1px;

  &:checked {
    background-color: transparent;
  }

  &:focus-visible {
    box-shadow: 0 0 0px 1px white;
  }
`;

// the fake checkbox that is shown for better styling
type TFakeCheckbox = {
  $checked: boolean;
  $themeType: TUiColorsMain;
  $layer: TLayer;
};
export const FakeCheckbox = styled.div<TFakeCheckbox & { theme: TTheme }>`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${({ theme, $themeType, $layer }) => getBackgroundColor({ theme, $themeType, $layer })};
  z-index: 1;
  ${checkboxStyles}
  box-sizing: border-box;
  width: 20px;
  height: 20px;

  &:focus-visible {
    outline: none; /* Remove default outline */
  }
  /* the checkmark svg */
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    transform: translate(-50%, -50%);
    fill: ${({ theme }) => theme.color.accent[0]};
    display: ${({ $checked }) => ($checked ? 'block' : 'none')};
  }
`;

// the container for the checkbox and the fake checkbox
export const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`;
