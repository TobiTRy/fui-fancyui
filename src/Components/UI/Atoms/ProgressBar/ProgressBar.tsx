import React from 'react';
import styled from 'styled-components';
import { borderRadius } from '../../Design/design';
import { TUiColorsType } from '../../Design/color/designColor';

// Define the styled component for the progress bar container
const ProgressBarContainer = styled.div<{theme: TUiColorsType}>`
  width: 100%;
  height: 4px;
  background-color: ${({theme}) => theme.secondary[7]};
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

// Define the interface for the progress bar fill props
interface IProgressBarFillProps {
  width: number;
}

// Define the styled component for the progress bar fill
const ProgressBarFill = styled.div<IProgressBarFillProps & { theme: TUiColorsType }>`
  height: 100%;
  width: ${({ width }) => width}%;
  background-color: ${({ theme }) => theme.accent[0]};
  border-radius: ${borderRadius.complete} 0 0 ${borderRadius.complete};
  transition: width 0.2s ease-out;
`;

// Define the interface for the progress bar props
export interface IProgressBar {
  progress?: number;
  maxValue?: number;
  id?: string;
}

// Define the ProgressBar component
export default function ProgressBar({ progress = 0, maxValue = 100, id }: IProgressBar) {
  // Calculate the width of the progress bar fill
  const width = (progress / maxValue) * 100;

  // Render the ProgressBar component with the appropriate props
  return (
    <ProgressBarContainer id={id} role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={maxValue}>
      <ProgressBarFill width={width} />
    </ProgressBarContainer>
  );
}