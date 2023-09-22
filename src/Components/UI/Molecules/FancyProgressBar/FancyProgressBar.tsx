import React from 'react';
import { styled, css } from 'styled-components';

import { TAlign } from '../../Atoms/AlignedInputLabel/AlignedInputLabel';
import AlignedInputLabel from '../../Atoms/AlignedInputLabel/AlignedInputLabel';
import { spacingPx } from '../../Design/design';

import ProgressBar, { IProgressBar } from '../../Atoms/ProgressBar/ProgressBar';
import { TUiColorsType } from '../../Design/color/designColor';
import { TLayer } from '../../Design/color/generateColorSteps';

// Define a styled component for the progress bar wrapper
const Wrapper = styled.div<{ $value?: number; theme: TUiColorsType }>`
  width: 100%;
  display: flex;
  gap: ${spacingPx.xxs};
  flex-direction: column;

  & span {
    margin-top: ${spacingPx.xxs};
  }

  /* if the value is full set the color to accent color */
  ${({ $value, theme }) =>
    $value === 100 &&
    css`
      & label {
        color: ${theme.accent[0]};
      }

      & span {
        color: ${theme.accent[0]};
      }
    `}
`;

// Define the props for the ProgressBar component
interface IFancyProgressBar extends IProgressBar {
  label?: string;
  labelAlign?: TAlign;
  progressCount?: boolean;
  progressAlign?: TAlign;
  themeType?: keyof TUiColorsType;
  textLayer?: TLayer;
  layer?: TLayer;
}
// --------------------------------------------------------------------------- //
// ---------- The Progressbar with some Items Like Percent and Label --------- //
// --------------------------------------------------------------------------- //
export default function FancyProgressBar(props: IFancyProgressBar) {
  const { progress, maxValue, id, label, labelAlign, progressAlign, progressCount, themeType, layer, textLayer } = props;

  return (
    <Wrapper $value={progress}>
      {/* A lable to describe the Progress for */}
      {label && (
        <AlignedInputLabel htmlFor={id} $align={labelAlign} $layer={textLayer}>
          {label}
        </AlignedInputLabel>
      )}
      {/* The Progressbar Atom itself */}
      <ProgressBar id={id} progress={progress} maxValue={maxValue || 100} themeType={themeType} layer={layer} />

      {/* The Progress in percent as Text */}
      {progressCount && (
        <AlignedInputLabel as={'span'} $align={progressAlign} $layer={textLayer}>
          {progress}%
        </AlignedInputLabel>
      )}
    </Wrapper>
  );
}
