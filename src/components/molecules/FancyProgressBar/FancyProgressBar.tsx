import { TLayer } from '@/interface/TLayer';
import { TThemeTypes } from '@/interface/TThemeTypes';

import ProgressBar, { IProgressBar } from '@/components/atoms/ProgressBar/ProgressBar';
import { AlignedInputLabel } from '@/components/atoms/AlignedInputLabel/AlignedInputLabel';
import { TAlign } from '@/components/atoms/AlignedInputLabel/TalignedInputLabel.model';

import { Wrapper } from './FancyProgressBar.style';

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
  const { progress, maxValue, id, label, labelAlign, progressAlign, progressCount, themeType, layer, textLayer } =
    props;

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
