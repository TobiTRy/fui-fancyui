'use client';

import { disabledStyle } from '@/design/designFunctions/disabledStyle';
import { styled } from 'styled-components';

const RawButton = styled.button<{ disabled?: boolean }>`
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  display: flex;
  color: inherit;

  ${(props) => props.disabled && disabledStyle}
`;

RawButton.displayName = 'RawButton';

export default RawButton;
