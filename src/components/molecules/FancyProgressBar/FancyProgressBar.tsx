import { TLayer } from '@/types/TLayer';
import { TThemeTypes } from '@/types/TThemeTypes';

import ProgressBar, { IProgressBar } from '@/components/atoms/ProgressBar/ProgressBar';

import { Wrapper } from './FancyProgressBar.style';
import InputLabel from '@/components/atoms/InputLabel/InputLabel';
import { TTextAlignLC } from '@/types/TTextAlignLC';
import { TTextAlignLRC } from 'lib';

// Define the props for the ProgressBar component
interface IFancyProgressBar extends IProgressBar {
  label?: string;
  labelAlign?: TTextAlignLC;
  progressCount?: boolean;
  progressAlign?: TTextAlignLRC;
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
        <InputLabel $lableVariant="static" htmlFor={id} $align={labelAlign} $layer={textLayer}>
          {label}
        </InputLabel>
      )}
      {/* The Progressbar Atom itself */}
      <ProgressBar id={id} progress={progress} maxValue={maxValue || 100} themeType={themeType} layer={layer} />

      {/* The Progress in percent as Text */}
      {progressCount && (
        <InputLabel $lableVariant="static" as={'span'} $align={progressAlign} $layer={textLayer}>
          {progress}%
        </InputLabel>
      )}
    </Wrapper>
  );
}
