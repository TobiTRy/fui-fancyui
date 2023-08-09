import React from 'react';

import FancyProfilePicture, { IFancyProfilePicture } from '../../Atoms/FancyProfilePicture/FancyProfilePicture';
import Typography from '../../Atoms/Typography/Typography';
import { TextWrapper, Wrapper } from './FancyMiniProfile.style';
import { fontSizeVariants } from '../../Atoms/Typography/TypographyStyleVariants';

import { spacingPx } from '../../Design/design';

// the inter
interface IPillSettings {
  [key: string]: {
    imageSize: IFancyProfilePicture['size'];
    padding: keyof typeof spacingPx | undefined;
    textSize: keyof typeof fontSizeVariants;
    paddingToEdge: keyof typeof spacingPx;
    gapPictureAndText: keyof typeof spacingPx;
  };
}

// the stettings for the different sizes
const pillSettings: IPillSettings = {
  sm: {
    imageSize: 'xs',
    padding: undefined,
    textSize: 'verySmallText',
    paddingToEdge: 'md',
    gapPictureAndText: 'xs',
  },
  md: {
    imageSize: 'xs',
    padding: 'xs',
    textSize: 'smallText',
    paddingToEdge: 'sm',
    gapPictureAndText: 'xs',
  },
  lg: {
    imageSize: 'sm',
    padding: 'xs',
    textSize: 'h5',
    paddingToEdge: 'lg',
    gapPictureAndText: 'xs',
  },
};

export type TTextAlign = 'left' | 'right';
interface IFancyMiniprofile {
  alignText?: TTextAlign;
  headingText?: string;
  subHeadingText?: string;
  imageURL?: string;
  size?: keyof typeof pillSettings;
}
export default function FancyMiniProfile(props: IFancyMiniprofile) {
  const { alignText, size, imageURL, headingText, subHeadingText } = { ...defaultProps, ...props };

  const getSizeProps = pillSettings[size || 'sm'];

  return (
    <Wrapper $size={getSizeProps.padding} $gapSpacing={getSizeProps.gapPictureAndText}>
      <FancyProfilePicture rounded="complete" size={getSizeProps.imageSize} src={imageURL || ''} />
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
