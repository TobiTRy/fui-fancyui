import { ReactNode } from 'react';

import { FancyImage } from '@/components/atoms/FancyImage';
import { TFancyImage } from '@/components/atoms/FancyImage/FancyImage';
import { ImageVideoOverlay } from '@/components/atoms/ImageVideoOverlay';
import { TPositions } from '@/components/atoms/ImageVideoOverlay/ImageVideoOverlay';

// Define the props for the FancyImageText component
interface IImageWithTextProps extends TFancyImage {
  children?: ReactNode;
  position?: TPositions;
}
// --------------------------------------------------------------------------- //
// ------------The Definition for the FancyImageText Component --------------- //
// --------------------------------------------------------------------------- //
export default function FancyImageText(props: IImageWithTextProps) {
  const { position, children, ...restProps } = { ...defaultProps, ...props };

  return (
    <ImageVideoOverlay position={position} textChildren={children}>
      <FancyImage {...restProps}></FancyImage>
    </ImageVideoOverlay>
  );
}

// Define the default props for the FancyImageText component
const defaultProps = {
  position: 'top-right' as TPositions,
};
