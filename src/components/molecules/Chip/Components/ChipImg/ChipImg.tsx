import React from 'react';

import { TTheme } from '@/interface/TTheme';
import { styled } from 'styled-components';
import { FancyImage } from '@/components/atoms/FancyImage';

type IFancyChipImgProps = React.ComponentProps<typeof FancyImage>;
export default function ChipImg(props: IFancyChipImgProps) {
  const { ...fancyImgaeProps } = props;

  return (
    <WrapperImage>
      <FancyImage alt="chip" {...fancyImgaeProps} />
    </WrapperImage>
  );
}

// Define the styled component for the wrapper image
export const WrapperImage = styled.div<{ theme: TTheme }>`
  aspect-ratio: 1/1;
  height: 20px;

  img {
    height: 100%; /* Ensures the image doesn't exceed the container's width */
    grid-row: 1;
    border-radius: 50%;
    object-fit: cover;
  }
`;
