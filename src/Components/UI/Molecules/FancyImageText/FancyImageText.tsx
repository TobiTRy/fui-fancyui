import React from 'react';

import FancyImage, { IFancyImage } from '../../../Atoms/FancyImage/FancyImage';
import ImageVideoOverlay, { TPositions } from '../../../Atoms/ImageVideoOverlay/ImageVideoOverlay';

// Define the props for the FancyImageText component
interface IImageWithTextProps extends IFancyImage {
  children?: React.ReactNode;
  position?: TPositions;
}

// --------------------------------------------------------------------------- //
// ------------The Definition for the FancyImageText Component --------------- //
// --------------------------------------------------------------------------- //
export default function FancyImageText(props: IImageWithTextProps) {
  const { position, ...restProps } = { ...defaultProps, ...props };

  return (
    <ImageVideoOverlay position={position} textChildren={props.children}>
      <FancyImage {...restProps}></FancyImage>
    </ImageVideoOverlay>
  );
}

// Define the default props for the FancyImageText component
const defaultProps = {
  position: 'top-right' as TPositions,
};
