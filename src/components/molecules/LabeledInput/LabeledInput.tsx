import { ReactElement } from 'react';

import { styled } from 'styled-components';
import { TTheme } from '@/types/TTheme';
import { getBackgroundColor, getTextColor } from '@/design/designFunctions/colorCalculatorForComponent';
import { TUiColorsSystemMessage } from '@/types/TUiColorsSystemMessage';
import { TThemeTypesNotTransparent } from '@/types/TThemeTypesNotTransparent';
import { TLayer } from '@/types/TLayer';
import { TUiColorsMain } from '@/types/TUiColorsMain';

type TWrapper = {
  $themeType?: TThemeTypesNotTransparent;
  $layer?: TLayer;
};

const Wrapper = styled.div<TWrapper & { theme: TTheme }>`
  position: relative;
  background-color: ${({ theme, $themeType, $layer }) =>
    getBackgroundColor({ theme, $themeType: $themeType ?? 'primary', $layer: $layer ?? 2 })};
`;

const InputWrapper = styled.div<{ theme: TTheme; $isActive: boolean }>`
  font-size: 18px;
  color: ${({ theme }) => getTextColor({ theme, $themeType: 'secondary', $textLayer: 4 })};
  border-radius: 3px;
  outline: none;
  background-color: transparent;
  box-sizing: border-box; /* Added to include padding in the width */

  input {
    padding: ${({ $isActive }) => ($isActive ? '16px 10px 4px 10px' : '10px')};
    font-size: 18px;
  }
`;

type TInputLabel = {
  $isActive: boolean;
  $type?: TLabeledInput['type'];
  $systemMessageType?: TUiColorsSystemMessage;
  $themeType?: TUiColorsMain;
  $layer?: TLayer;
};

const InputLabel = styled.label<TInputLabel & { theme: TTheme }>`
  position: absolute;
  left: 10px;
  color: ${({ theme }) => getTextColor({ theme, $themeType: 'secondary', $textLayer: 4 })};
  top: ${({ $isActive }) => ($isActive ? '10px' : '50%')};
  transform: translateY(-50%);
  font-size: ${({ $isActive }) => ($isActive ? '12px' : '16px')};
  transition:
    top 0.25s ease,
    color 0.25s ease,
    font-size 0.25s ease;
  pointer-events: none; /* Ensures the input can be focused when clicking on the label */
  color: ${({ $systemMessageType, theme, $isActive, $themeType = 'secondary', $layer }) =>
    getBackgroundColor({
      theme,
      $themeType: $systemMessageType ? $systemMessageType : $isActive ? 'accent' : $themeType,
      $layer: $isActive ? 0 : $layer,
    })};
`;

type TLabeledInput = {
  label?: string;
  placeholder?: string;
  type?: 'box' | 'transparent';
  inputElement?: ReactElement<HTMLInputElement>;
  systemMessageType?: TUiColorsSystemMessage;
  value?: string | number | readonly string[] | undefined;
  themeType?: Exclude<TUiColorsMain, 'accent'>;
  layer?: TLayer;
};

export default function LabeledInput(props: TLabeledInput) {
  const { inputElement, systemMessageType, label, value, placeholder, type, themeType, layer } = props;

  const labelShouldMoveUp = !!((value === 0 ? undefined : value) || value === 0) || !!placeholder;

  // Set the initial state of the input field
  return (
    <Wrapper $themeType={themeType} $layer={layer}>
      <InputLabel $type={type} $isActive={labelShouldMoveUp} $systemMessageType={systemMessageType}>
        {label}
      </InputLabel>
      <InputWrapper $isActive={labelShouldMoveUp}>{inputElement}</InputWrapper>
    </Wrapper>
  );
}
