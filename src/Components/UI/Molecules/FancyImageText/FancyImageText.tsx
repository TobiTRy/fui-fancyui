import React from 'react';

import FancyImage, { IFancyImage } from '../../Atoms/FancyImage/FancyImage';
import ImageVideoOverlay, { TPositions } from '../../Atoms/ImageVideoOverlay/ImageVideoOverlay';


interface IImageWithTextProps extends IFancyImage {
  position: TPositions;
}
export default function FancyImageText(props: IImageWithTextProps) {
  const { position, ...restProps } = props;

  return (
    <ImageVideoOverlay position={position}>
      <FancyImage {...restProps}></FancyImage>
    </ImageVideoOverlay>
  );
}