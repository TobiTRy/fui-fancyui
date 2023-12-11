import { FancyProfilePicture } from '@/components/atoms/FancyProfilePicture';
import { Typography } from '@/components/atoms/Typography';

import { TTextAlignLR } from '@/interface/TTextAlignLR';
import { TThemeTypes } from '@/interface/TThemeTypes';
import { TLayer } from '@/interface/TLayer';

import { pillSettings } from './sizeSettings';
import { TextWrapper, Wrapper } from './FancyMiniProfile.style';

type TFancyMiniprofile = {
  alignText?: TTextAlignLR;
  headingText?: string;
  subHeadingText?: string;
  src?: string;
  size?: keyof typeof pillSettings;
  themeType?: TThemeTypes;
  layer?: TLayer;
  shadow?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;
// --------------------------------------------------------------------------- //
// ------ The MiniProfile rendes a image with a heading and description ------ //
// --------------------------------------------------------------------------- //
export default function FancyMiniProfile(props: TFancyMiniprofile) {
  const { alignText, size, src, headingText, subHeadingText, themeType, layer, shadow, ...htmlProps } = props;

  //get the settings from the picked size
  const getSizeProps = pillSettings[size || 'sm'];

  return (
    <Wrapper
      $size={getSizeProps.padding}
      $gapSpacing={getSizeProps.gapPictureAndText}
      $themeType={themeType}
      $layer={layer}
      $shadow={shadow}
      {...htmlProps}
    >
      {/* The Profile Picture */}
      <FancyProfilePicture rounded="complete" size={getSizeProps.imageSize} src={src || ''} />
      {/* The wraper with the heading and subheading text  */}
      {(headingText || subHeadingText) && (
        <TextWrapper $alignText={alignText} $paddingToedge={getSizeProps.paddingToEdge}>
          {headingText && (
            <Typography type="inlineElement" variant={getSizeProps.textSize} weight="bold">
              {headingText}
            </Typography>
          )}
          {subHeadingText && (
            <Typography type="inlineElement" variant={getSizeProps.textSize}>
              {subHeadingText}
            </Typography>
          )}
        </TextWrapper>
      )}
    </Wrapper>
  );
}
