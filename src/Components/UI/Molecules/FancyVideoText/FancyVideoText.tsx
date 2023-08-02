import React from 'react'

import VideoAtom, { IFancyVideo } from '../../Atoms/FancyVideo/FancyVideo'
import ImageVideoOverlay, { TPositions} from '../../Atoms/ImageVideoOverlay/ImageVideoOverlay'


interface IFancyVideoTextProps extends IFancyVideo {
  position: TPositions;
  children?: React.ReactNode;
}
export default function FancyVideoText(props: IFancyVideoTextProps) {
  const { position, ...restProps } = props;
  return (
    <ImageVideoOverlay position={position} textChildren={props.children}>
      <VideoAtom {...restProps}/>
    </ImageVideoOverlay>
  )
}
