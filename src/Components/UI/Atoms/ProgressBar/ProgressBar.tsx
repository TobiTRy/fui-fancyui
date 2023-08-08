import React from 'react';

import styled from 'styled-components';
import { uiColors } from '../../Design/design';

// Define a styled component for the progress bar
const StyledProgressBar = styled.progress`
  width: 100%;
  height: 4px;
  border-radius: 10px;
  overflow: hidden; // This helps to apply the border-radius
  background-color: ${uiColors.secondary.darkest};
  color: ${uiColors.accent.main}; // This sets the color of the progress bar
  transition: all 0.3s ease-out; 
  // For Webkit browsers like Chrome and Safari
  &::-webkit-progress-bar {
    border-radius: 10px;
    background-color: ${uiColors.secondary.darkest};
  }

  &::-webkit-progress-value {
    border-radius: 10px;
    background-color: ${uiColors.accent.main};
  }

  // For Firefox
  &::-moz-progress-bar {
    border-radius: 10px;
    background-color: ${uiColors.accent.main};
  }
`;

export interface IProgressBar {
  progress?: number;
  maxValue?: number;
  id?: string;
} 

// --------------------------------------------------------------------------- //
// ---------- A Simple Progressbar Atom to restyle the progressbar ----------- //
// --------------------------------------------------------------------------- //
export default function ProgressBar(props: IProgressBar) {
  const { progress, maxValue, id } = props;
  
  return <StyledProgressBar id={id} value={progress} max={maxValue || 100} />;
}
