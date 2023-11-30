import React from 'react';
import { styled, css } from 'styled-components';

import { TAlign } from '../../atoms/AlignedInputLabel/TalignedInputLabel.model';
import { AlignedInputLabel } from '../../atoms/AlignedInputLabel/AlignedInputLabel';

import ProgressBar, { IProgressBar } from '../../atoms/ProgressBar/ProgressBar';
import { TThemeTypes } from '@/components/core/interface/TUiColors';
import { TLayer } from '@/components/core/interface/TLayer';
import { TTheme } from '@/components/core/interface/TTheme';

// Define a styled component for the progress bar wrapper
const Wrapper = styled.div<{ $value?: number; theme: TTheme }>`
  width: 100%;
  display: flex;
  gap: ${({ theme }) => theme.spacing.xxs};
  flex-direction: column;

  & span {
    margin-top: ${({ theme }) => theme.spacing.xxs};
  }

  /* if the value is full set the color to accent color */
  ${({ $value, theme }) =>
    $value === 100 &&
    css`
      & label {
        color: ${theme.colors.accent[0]};
      }

      & span {
        color: ${theme.colors.accent[0]};
      }
    `}
`;

// Define the props for the ProgressBar component
interface IFancyProgressBar extends IProgressBar {
  label?: string;
  labelAlign?: TAlign;
  progressCount?: boolean;
  progressAlign?: TAlign;
  themeType?: TThemeTypes;
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
