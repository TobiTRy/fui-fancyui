import { isAspectRatioValid } from '@/utils/validations/isAspectRatioValid';
import { FancyVideoSource } from '@/components/atoms/FancyVideoSource';
import { StyledVideo } from '@/components/atoms/FancyVideo/FancyVideo.style';
import { TFancyVideoWithHTMLAttrs } from '@/components/atoms/FancyVideo/FancyVideo.model';

// --------------------------------------------------------------------------- //
// -------------- The Definition for the FancyVideo Component ---------------- //
// --------------------------------------------------------------------------- //
function FancyVideo(props: TFancyVideoWithHTMLAttrs) {
  const { autoPlay, muted, aspectRatio, darken, children, ...htmlProps } = props;

  // Validate the aspect ratio if it is provided
  if (aspectRatio && !isAspectRatioValid(aspectRatio)) {
    throw new Error('The aspect ratio is not valid. Please use the format "16/9"');
  }

  // Render the video with the appropriate props
  return (
    <StyledVideo $aspectRatio={aspectRatio} muted={autoPlay ? true : muted} $darken={darken} {...htmlProps}>
      {children}
    </StyledVideo>
  );
}

FancyVideo.Source = FancyVideoSource;

export default FancyVideo; // is needed here for the storybook to work
