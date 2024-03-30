import { useState } from 'react';

import { ColorDisplay } from '@/components/molecules/ColorDisplay';
import { copyToClipBoard } from '@/utils/functions/copyToClipBoard';
import { TFancyColorDisplay } from '@/components/organisms/FancyColorDisplay/FancyColorDisplay.model';

export default function FancyColorDisplay(props: TFancyColorDisplay) {
  const {
    colorValue,
    opacity,
    fullHeight,
    borderRadius,
    sizeC = 'sm',
    showClipboard = true,
    showText = true,
    ...htmlProps
  } = props;
  const [copyd, setCopyd] = useState(false);

  // Function to copy the color to the clipboard
  const copyValue = () => {
    copyToClipBoard(colorValue.toString())
      .then(() => {
        setCopyd(true);
        setTimeout(() => setCopyd(false), 1000);
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <ColorDisplay
      colorValue={colorValue}
      sizeC={sizeC}
      opacity={opacity}
      borderRadius={borderRadius}
      fullHeight={fullHeight}
      onClick={copyValue}
      {...htmlProps}
    >
      {showClipboard && <ColorDisplay.ClipBoardIcon sizeC={sizeC} copyd={copyd} />}
      {showText && <ColorDisplay.ColorValue colorValue={colorValue} sizeC={sizeC} />}
    </ColorDisplay>
  );
}
