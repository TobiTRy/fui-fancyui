import { ReactElement, useEffect, useState } from 'react';

import { styled } from 'styled-components';
import { TTheme } from '@/types/TTheme';
import { getBackgroundColor, getTextColor } from '@/design/designFunctions/colorCalculatorForComponent';
import { TUiColorsSystemMessage } from '@/types/TUiColorsSystemMessage';
import { TThemeTypesNotTransparent } from '@/types/TThemeTypesNotTransparent';
import { TLayer } from '@/types/TLayer';
import { TColorStateOutput } from '@/design/designFunctions/calcColorState';

type TWrapper = {
  $themeType?: TThemeTypesNotTransparent;
  $layer?: TLayer;
  $colorState?: TColorStateOutput;
};

const Wrapper = styled.div<TWrapper & { theme: TTheme }>`
  position: relative;
  background-color: ${({ theme, $themeType, $layer }) =>
    getBackgroundColor({ theme, $themeType: $themeType ?? 'primary', $layer: $layer ?? 2 })};
  color: ${({ $colorState, theme, $themeType = 'secondary', $layer = 4 }) => {
    switch ($colorState) {
      case 'error':
        return theme.colors.error[0];
      case 'active':
        return theme.colors.accent[0];
      case 'success':
        return theme.colors.success[0];
      case 'warning':
        return theme.colors.warning[0];
      case 'info':
        return theme.colors.info[0];
      default:
        return getTextColor({ theme, $themeType, $textLayer: $layer });
    }
  }};
`;

const InputWrapper = styled.div<{ theme: TTheme }>`
  font-size: 16px;
  padding: 16px 10px 6px 10px;
  color: ${({ theme }) => getBackgroundColor({ theme, $themeType: 'secondary', $layer: 4 })};
  border-radius: 3px;
  outline: none;
  width: 250px;
  background-color: transparent;
  box-sizing: border-box; /* Added to include padding in the width */
`;

const InputLabel = styled.label<{ $isActive: boolean; $type?: TLabeledInput['type'] }>`
  position: absolute;
  left: 10px;
  top: ${({ $isActive }) => ($isActive ? '10px' : '50%')};
  transform: translateY(-50%);
  font-size: ${({ $isActive }) => ($isActive ? '12px' : '16px')};
  transition:
    top 0.2s ease,
    font-size 0.2s ease;
  pointer-events: none; /* Ensures the input can be focused when clicking on the label */
`;

type TLabeledInput = {
  label?: string;
  placeholder?: string;
  type?: 'box' | 'transparent';
  inputElement: ReactElement<HTMLInputElement>;
  sytemMessageState?: TUiColorsSystemMessage;
  value?: string | number | readonly string[] | undefined;
  themeType?: TThemeTypesNotTransparent;
  layer?: TLayer;
};

export default function LabeledInput(props: TLabeledInput) {
  const { inputElement, sytemMessageState, label, value, placeholder, type, themeType, layer } = props;
  const [isActive] = useState(true);
  const [isInitial, setIsInitial] = useState(false);

  const labelShouldMoveUp =
    !!((isInitial && value === 0 ? undefined : value) || (isInitial && value === 0)) || isActive || !!placeholder;

  // Set the initial state of the input field
  useEffect(() => {
    if (isActive) setIsInitial(true);
  }, [isActive]);

  return (
    <Wrapper $themeType={themeType} $layer={layer} $colorState={sytemMessageState}>
      <InputLabel $type={type} $isActive={labelShouldMoveUp}>
        {label}
      </InputLabel>
      <InputWrapper>{inputElement}</InputWrapper>
    </Wrapper>
  );
}
