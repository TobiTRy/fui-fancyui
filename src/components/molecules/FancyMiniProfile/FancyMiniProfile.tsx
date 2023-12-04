import FancyProfilePicture from '@/components/atoms/FancyProfilePicture/FancyProfilePicture';
import { Typography } from '@/components/atoms/Typography';

import { TTextAlignLR } from '@/interface/TTextAlignLR';
import { TThemeTypes } from '@/interface/TThemeTypes';
import { TLayer } from '@/interface/TLayer';

import { pillSettings } from './sizeSettings';
import { TextWrapper, Wrapper } from './FancyMiniProfile.style';

interface IFancyMiniprofile {
  alignText?: TTextAlignLR;
  headingText?: string;
  subHeadingText?: string;
  imageURL?: string;
  size?: keyof typeof pillSettings;
  themeType?: TThemeTypes;
  layer?: TLayer;
  shadow?: boolean;
}
// --------------------------------------------------------------------------- //
// ------ The MiniProfile rendes a image with a heading and description ------ //
// --------------------------------------------------------------------------- //
export default function FancyMiniProfile(props: IFancyMiniprofile) {
  const { alignText, size, imageURL, headingText, subHeadingText, themeType, layer, shadow } = { ...defaultProps, ...props };

  //get the settings from the picked size
  const getSizeProps = pillSettings[size || 'sm'];

  return (
    <Wrapper
      $size={getSizeProps.padding}
      $gapSpacing={getSizeProps.gapPictureAndText}
      $themeType={themeType}
      $layer={layer}
      $shadow={shadow}
    >
      {/* The Profile Picture */}
      <FancyProfilePicture rounded="complete" size={getSizeProps.imageSize} src={imageURL || ''} />
      {/* The wraper with the heading and subheading text  */}
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
    </Wrapper>
  );
}

const defaultProps: IFancyMiniprofile = {
  size: 'sm',
};
