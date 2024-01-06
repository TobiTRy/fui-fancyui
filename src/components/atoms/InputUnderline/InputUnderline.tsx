import { HTMLAttributes } from 'react';

import { TLayer } from '@/types/TLayer';
import { TThemeTypes } from '@/types/TThemeTypes';
import { TColorStateOutput } from '@/design/designFunctions/calcColorState';

import { UnderLine } from '@/components/atoms/InputUnderline/InputUnderline.style';

// Define the props for the FancyInputUnderline component
export type TFancyUnderline = {
  colorState?: TColorStateOutput;
  isActive?: boolean;
  autoWidth?: boolean;
  themeType?: TThemeTypes;
  layer?: TLayer;
} & HTMLAttributes<HTMLElement>;
// --------------------------------------------------------------------------- //
// --------- The underline for the input components with state style --------- //
// --------------------------------------------------------------------------- //
export default function InputUnderline(props: TFancyUnderline) {
  const { colorState = 'default', isActive, autoWidth, layer = 4, themeType, ...htmlProps } = props;

  console.log('colorState', colorState);
  // Render the FancyInputUnderline component with the appropriate props
  return (
    <UnderLine
      $colorState={colorState}
      $themeType={themeType}
      $layer={layer}
      $isActive={isActive}
      $autoWidth={autoWidth}
      {...htmlProps}
    />
  );
}
