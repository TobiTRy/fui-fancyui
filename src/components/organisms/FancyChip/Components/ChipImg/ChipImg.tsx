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
    display: grid; /* Enables a grid layout */
    grid-template-rows: auto; /* The row height is determined by the content */
    width: fit-content;

  img {
    max-width: 100%; /* Ensures the image doesn't exceed the container's width */
    grid-row: 1;
  }
`;