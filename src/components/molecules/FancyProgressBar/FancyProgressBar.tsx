import { TLayer } from '@/types/TLayer';

import ProgressBar, { IProgressBar } from '@/components/atoms/ProgressBar/ProgressBar';

import { Wrapper } from './FancyProgressBar.style';
import { TTextAlignLC } from '@/types/TTextAlignLC';
import { TTextAlignLRC } from '@/types/TTextAlignLRC';
import { AlignedLabel } from '@/components/atoms/AlignedLabel/AlignedLabel';
import { Typography } from '@/components/atoms/Typography';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

// Define the props for the ProgressBar component
interface IFancyProgressBar extends IProgressBar {
  label?: string;
  labelAlign?: TTextAlignLC;
  progressCount?: boolean;
  progressAlign?: TTextAlignLRC;
  themeType?: TUiColorsNotTransparent;
  textLayer?: TLayer;
  layer?: TLayer;
}
// --------------------------------------------------------------------------- //
// ---------- The Progressbar with some Items Like Percent and Label --------- //
// --------------------------------------------------------------------------- //
export default function FancyProgressBar(props: IFancyProgressBar) {
  const { progress, maxValue, id, label, labelAlign, progressAlign, progressCount, themeType, layer, textLayer } =
    props;

  return (
    <Wrapper $value={progress}>
      {/* A lable to describe the Progress for */}
      {label && (
        <AlignedLabel htmlFor={id} $align={labelAlign} $layer={textLayer}>
          {label}
        </AlignedLabel>
      )}

      {/* The Progressbar Atom itself */}
      <ProgressBar id={id} progress={progress} maxValue={maxValue || 100} themeType={themeType} layer={layer} />

      {/* The Progress in percent as Text */}
      {progressCount && (
        <AlignedLabel as={'span'} $align={progressAlign} $layer={textLayer}>
          <Typography type="content">{progress}%</Typography>
        </AlignedLabel>
      )}
    </Wrapper>
  );
}
