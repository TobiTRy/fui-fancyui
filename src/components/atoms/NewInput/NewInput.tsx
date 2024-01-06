import React, { useState } from 'react';
import styled from 'styled-components';
import { TTheme } from '@/types/TTheme';
import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent';

const Wrapper = styled.div<{ theme: TTheme }>`
  position: relative;
  margin: 20px;
  background-color: ${({ theme }) => getBackgroundColor({ theme, $themeType: 'primary', $layer: 2 })};
  color: ${({ theme }) => getBackgroundColor({ theme, $themeType: 'secondary', $layer: 4 })};
`;

const InputField = styled.input<{ theme: TTheme }>`
  font-size: 16px;
  padding: 16px 10px 4px 10px;
  border: 1px solid #dbdbdb;
  color: ${({ theme }) => getBackgroundColor({ theme, $themeType: 'secondary', $layer: 4 })};
  border-radius: 3px;
  outline: none;
  width: 250px;
  background-color: transparent;
  box-sizing: border-box; /* Added to include padding in the width */
`;

const InputLabel = styled.label<{ isActive: boolean }>`
  position: absolute;
  left: 10px;
  top: ${({ isActive }) => (isActive ? '10px' : '50%')};
  transform: translateY(-50%);
  font-size: ${({ isActive }) => (isActive ? '12px' : '16px')};
  transition:
    top 0.2s ease,
    font-size 0.2s ease;
  pointer-events: none; /* Ensures the input can be focused when clicking on the label */
`;

const AnimatedInput = () => {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const isActive = value.length > 0 || isFocused;

  return (
    <Wrapper>
      <InputField
        id="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <InputLabel htmlFor="input" isActive={isActive}>
        Phone number
      </InputLabel>
    </Wrapper>
  );
};

export default AnimatedInput;
