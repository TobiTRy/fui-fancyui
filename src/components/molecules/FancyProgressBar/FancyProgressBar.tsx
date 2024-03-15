import { ProgressBar } from '@/components/atoms/ProgressBar';

import { AlignedLabel } from '@/components/atoms/AlignedLabel';
import { Typography } from '@/components/atoms/Typography';

import { Wrapper } from './FancyProgressBar.style';
import { TFancyProgressBarWithHTMLAttrs } from './TFancyProgressBar.model';
import { useId } from 'react';

// --------------------------------------------------------------------------- //
// ---------- The Progressbar with some Items Like Percent and Label --------- //
// --------------------------------------------------------------------------- //
export default function FancyProgressBar(props: TFancyProgressBarWithHTMLAttrs) {
  const {
    progress,
    maxValue,
    id,
    label,
    labelAlign,
    progressAlign,
    progressCount,
    themeType,
    layer,
    textLayer,
    ...htmlProps
  } = props;

  const reactID = useId();
  const usedId = id ? id : reactID;

  return (
    <Wrapper $value={progress} {...htmlProps}>
      {/* A lable to describe the Progress for */}
      {label && (
        <AlignedLabel htmlFor={usedId} align={labelAlign} layer={textLayer}>
          {label}
        </AlignedLabel>
      )}
      {/* The Progressbar Atom itself */}
      <ProgressBar id={usedId} progress={progress} maxValue={maxValue || 100} themeType={themeType} layer={layer} />
      {/* The Progress in percent as Text */}
      {progressCount && (
        <AlignedLabel as={'span'} align={progressAlign} layer={textLayer}>
          <Typography variant="subTextCaption">{progress}%</Typography>
        </AlignedLabel>
      )}
    </Wrapper>
  );
}
