'use client';

import { TProgressBarWithHTMLAttrs } from './ProgressBar.model';
import { ProgressBarContainer, ProgressBarFill } from './ProgressBar.style';

// Define the interface for the progress bar props

// Define the ProgressBar component
export default function ProgressBar(props: TProgressBarWithHTMLAttrs) {
  const { progress = 0, maxValue = 100, id, themeType = 'primary', layer = 3, ...htmlProps } = props;
  // Calculate the width of the progress bar fill
  const width = (progress / maxValue) * 100;

  // Render the ProgressBar component with the appropriate props
  return (
    <ProgressBarContainer
      id={id}
      role="progressbar"
      $themeType={themeType}
      $layer={layer}
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={maxValue}
      {...htmlProps}
    >
      <ProgressBarFill width={width} />
    </ProgressBarContainer>
  );
}
