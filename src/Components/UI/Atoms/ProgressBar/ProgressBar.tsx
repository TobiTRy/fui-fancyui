import React from 'react';
import styled from 'styled-components';
import { borderRadius, uiColors } from '../../Design/design';

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 4px;
  background-color: ${uiColors.secondary[7]};
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

interface IProgressBarFillProps {
  width: number;
}

const ProgressBarFill = styled.div<IProgressBarFillProps>`
  height: 100%;
  width: ${(props) => props.width}%;
  background-color: ${uiColors.accent[0]};
  border-radius: ${borderRadius.complete} 0 0 ${borderRadius.complete};
  transition: width 0.2s ease-out;
`;

export interface IProgressBar {
  progress?: number;
  maxValue?: number;
  id?: string;
}

export default function ProgressBar({ progress = 0, maxValue = 100, id }: IProgressBar) {
  const width = (progress / maxValue) * 100;

  return (
    <ProgressBarContainer 
      id={id} 
      role="progressbar"
      aria-valuenow={progress} 
      aria-valuemin={0} 
      aria-valuemax={maxValue}
    >
      <ProgressBarFill width={width} />
    </ProgressBarContainer>
  );
}
