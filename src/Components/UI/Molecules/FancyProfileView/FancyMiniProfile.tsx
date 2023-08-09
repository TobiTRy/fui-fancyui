import React from 'react';
import styled, { css } from 'styled-components';

import { borderRadius, spacingPx, uiColors } from '../../Design/design';

import FancyProfilePicture, { IFancyProfilePicture } from '../../Atoms/FancyProfilePicture/FancyProfilePicture';
import Typography from '../../Atoms/Typography/Typography';
import { fontSizeVariants } from '../../Atoms/Typography/TypographyStyleVariants';

interface IPillSizes {
  [key: string]: {
    imageSize: IFancyProfilePicture['size'];
    padding: keyof typeof spacingPx | undefined;
    textSize: keyof typeof fontSizeVariants;
  };
}
const pillSizes: IPillSizes = {
  sm: {
    imageSize: 'xs',
    padding: undefined,
    textSize: 'smallText',
  },
  md: {
    imageSize: 'xs',
    padding: 'xs',
    textSize: 'smallText',
  },
  lg: {
    imageSize: 'sm',
    padding: 'xs',
    textSize: 'content',
  },
};

const Wrapper = styled.div<{ $size: keyof typeof spacingPx | undefined }>`
  display: flex;
  align-items: center;
  padding: ${({ $size }) => ($size ? spacingPx[$size] : '')};
  gap: ${spacingPx.xs};
  background-color: #576a9c;
  border-radius: ${borderRadius.complete};
`;

const TextWrapper = styled.div<{ $alignText?: TTextAlign }>`
  ${({ $alignText }) =>
    $alignText === 'left'
      ? css`
          order: -1;
          text-align: right;
          margin-left: ${spacingPx.md};
        `
      : css`
          margin-right: ${spacingPx.md};
        `}

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

type TTextAlign = 'left' | 'right';

interface IFancyMiniprofile {
  alignText?: TTextAlign;
  headingText?: string;
  subHeadingText?: string;
  imageURL?: string;
  size?: keyof typeof pillSizes;
}
export default function FancyMiniProfile(props: IFancyMiniprofile) {
  const { alignText, size, headingText, subHeadingText } = { ...defaultProps, ...props };

  const getSizeProps = pillSizes[size || 'sm'];

  return (
    <Wrapper $size={getSizeProps.padding}>
      <FancyProfilePicture
        rounded="complete"
        size={getSizeProps.imageSize}
        src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
      />
      <TextWrapper $alignText={alignText}>
        <Typography type="inlineElement" variant={getSizeProps.textSize} weight="bold">
          {headingText}
        </Typography>
        <Typography type="inlineElement" variant={getSizeProps.textSize}>
          {subHeadingText}
        </Typography>
      </TextWrapper>
    </Wrapper>
  );
}

const defaultProps: IFancyMiniprofile = {
  size: 'sm',
};
