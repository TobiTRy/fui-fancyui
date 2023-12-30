import React from 'react';

import { TTheme } from '@/interface/TTheme';
import { styled } from 'styled-components';
import { FancyImage } from '@/components/atoms/FancyImage';

type IFancyChipImgProps = React.ComponentProps<typeof FancyImage>;
export default function ChipImg(props: IFancyChipImgProps) {
  return (
    <WrapperImage>
      <FancyImage alt="chip" {...props} />
    </WrapperImage>
  );
}

// Define the styled component for the wrapper image

export const WrapperImage = styled.div<{ theme: TTheme }>`
  height: 100%;

  img {
    aspect-ratio: 1/1;
    height: 100%;
    grid-row: 1;
    border-radius: 50%;
    object-fit: cover;
  }
`;
