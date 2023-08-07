import React from 'react';
import styled, { css } from 'styled-components';

import { TAlign } from '../AlignedInputLabel/AlignedInputLabel';
import AlignedInputLabel from '../AlignedInputLabel/AlignedInputLabel';
import { uiColors, spacingPx } from '../../Design/design';

const StyledProgressBar = styled.progress`
  width: 100%;
  height: 4px;
  border-radius: 10px;
  overflow: hidden; // This helps to apply the border-radius
  background-color: ${uiColors.secondary.darkest};
  color: ${uiColors.accent.main}; // This sets the color of the progress bar

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

const Wrapper = styled.div<{ $value?: number }>`
  width: 100%;
  display: flex;
  gap: ${spacingPx.xxs};
  flex-direction: column;

  ${({ $value }) =>
    $value === 100 &&
    css`
      & label {
        color: ${uiColors.accent.main};
      }
    `}
`;

interface IProgressBar {
  label?: string;
  labelAlign?: TAlign;
  progressCount?: boolean;
  progressAlign?: TAlign;
  progress?: number;
  maxValue?: number;
  id?: string;
}

export default function ProgressBar(props: IProgressBar) {
  const { progress, maxValue, id, label, labelAlign, progressAlign, progressCount } = props;

  return (
    <Wrapper $value={progress}>
      {label && (
        <AlignedInputLabel htmlFor={id} $align={labelAlign}>
          {label}
        </AlignedInputLabel>
      )}
      <StyledProgressBar id={id} value={progress} max={maxValue || 100} />
      {progressCount && <AlignedInputLabel $align={progressAlign}>{progress}%</AlignedInputLabel>}
    </Wrapper>
  );
}
