import React from 'react';

import FancyImage, { IFancyImage } from '../../Atoms/FancyImage/FancyImage';
import ImageVideoOverlay, { TPositions } from '../../Atoms/ImageVideoOverlay/ImageVideoOverlay';


interface IImageWithTextProps extends IFancyImage {
  children?: React.ReactNode;
  position?: TPositions;
}
export default function FancyImageText(props: IImageWithTextProps) {
  const { position, ...restProps } = { ...defaultProps, ...props};

  return (
    <ImageVideoOverlay position={position} textChildren={props.children}>
      <FancyImage {...restProps}></FancyImage>
    </ImageVideoOverlay>
  );
}
const defaultProps = {
  position: 'top-right' as TPositions,
};