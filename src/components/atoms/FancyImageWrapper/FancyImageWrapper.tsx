import { TFancyImageWrapperWithNativeAttrs } from '@/components/atoms/FancyImageWrapper/FancyImageWrapper.model';
import { isAspectRatioValid } from '@/utils/validations/isAspectRatioValid';
import { ImageWrapper } from './FancyImageWrapper.style';

// --------------------------------------------------------------------------- //
// -------------- The Definition for the FancyImage Component ---------------- //
// --------------------------------------------------------------------------- //
export default function FancyImageWrapper(props: TFancyImageWrapperWithNativeAttrs) {
  const { aspectRatio, borderRadius, externalStyle, sizeW, sizeH, children, filter, objectFit, ...wrapperProps } =
    props;

  // Validate the aspect ratio if it is provided
  if (aspectRatio && !isAspectRatioValid(aspectRatio)) {
    throw new Error('The aspect ratio is not valid. Please use the format "16/9"');
  }

  // Render the image with the provided props
  return (
    <ImageWrapper
      $aspectRatio={aspectRatio}
      $filter={filter}
      $borderRadius={borderRadius}
      $externalStyle={externalStyle}
      $sizeH={sizeH}
      $sizeW={sizeW}
      $objectFit={objectFit}
      {...wrapperProps}
    >
      {children}
    </ImageWrapper>
  );
}
