import React from 'react';
import styled, { css } from 'styled-components';

import { TAlign } from '../../Atoms/AlignedInputLabel/AlignedInputLabel';
import AlignedInputLabel from '../../Atoms/AlignedInputLabel/AlignedInputLabel';
import { uiColors, spacingPx } from '../../Design/design';

import ProgressBar, { IProgressBar } from '../../Atoms/ProgressBar/ProgressBar';

// Define a styled component for the progress bar wrapper
const Wrapper = styled.div<{ $value?: number }>`
  width: 100%;
  display: flex;
  gap: ${spacingPx.xxs};
  flex-direction: column;

  & span {
    margin-top: ${spacingPx.xxs};
  }

  ${({ $value }) =>
    $value === 100 &&
    css`
      & label {
        color: ${uiColors.accent.main};
      }

      & span {
        color: ${uiColors.accent.main};
      }
    `}
`;

// Define the props for the ProgressBar component
interface IFancyProgressBar extends IProgressBar {
  label?: string;
  labelAlign?: TAlign;
  progressCount?: boolean;
  progressAlign?: TAlign;
}
// --------------------------------------------------------------------------- //
// ---------- The Progressbar with some Items Like Percent and Label --------- //
// --------------------------------------------------------------------------- //
export default function FancyProgressBar(props: IFancyProgressBar) {
  const { progress, maxValue, id, label, labelAlign, progressAlign, progressCount } = props;

  return (
    <Wrapper $value={progress}>
      {/* A lable to describe the Progress for */}
      {label && (
        <AlignedInputLabel htmlFor={id} $align={labelAlign}>
          {label}
        </AlignedInputLabel>
      )}
      {/* The Progressbar Atom itself */}
      <ProgressBar id={id} progress={progress} maxValue={maxValue || 100} />
      {/* The Progress in percent as Text */}
      {progressCount && (
        <AlignedInputLabel as={'span'} $align={progressAlign}>
          {progress}%
        </AlignedInputLabel>
      )}
    </Wrapper>
  );
}
