import React from 'react';
import { styled } from 'styled-components';

const StyledCheckbox = styled.input`
  appearance: none;
  width: 1.5rem;
  height: 1.5rem;
  border: 2px solid #007bff;
  border-radius: 3px;
  cursor: pointer;

  &:checked {
    background-color: #007bff;
  }
`;

export default function RawCheckbox() {
  return <StyledCheckbox type="checkbox"></StyledCheckbox>;
}
