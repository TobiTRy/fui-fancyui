import { styled } from 'styled-components';

import { TTheme } from '@/types/TTheme';

import { FancyImageWrapper, TFancyImageWrapper } from '@/components/atoms/FancyImageWrapper';

export default function ChipImg(props: TFancyImageWrapper) {
  return (
    <WrapperImage>
      <FancyImageWrapper aspectRatio="1/1" sizeH="fit" objectFit="cover" borderRadius="complete" {...props} />
    </WrapperImage>
  );
}

// Define the styled component for the wrapper image

export const WrapperImage = styled.div<{ theme: TTheme }>`
  height: 100%;

  img {
    grid-row: 1;
  }
`;
