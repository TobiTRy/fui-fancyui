import { TThemeTypes } from '@/interface/TThemeTypes';
import { TLayer } from '@/interface/TLayer';
import { ProgressBarContainer, ProgressBarFill } from './ProgressBar.style';

// Define the interface for the progress bar props
export interface IProgressBar {
  progress?: number;
  maxValue?: number;
  id?: string;
  themeType?: TThemeTypes;
  layer?: TLayer;
}
// Define the ProgressBar component
export default function ProgressBar({ progress = 0, maxValue = 100, id, themeType, layer }: IProgressBar) {
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
    >
      <ProgressBarFill width={width} />
    </ProgressBarContainer>
  );
}
