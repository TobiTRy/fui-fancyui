import { HTMLAttributes } from 'react';
import { CSSProp } from 'styled-components';

import { TLayer } from '@/types/TLayer';

import { UnderLine } from '@/components/atoms/InputUnderline/InputUnderline.style';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { TUiColorsSystemMessage } from '@/types/TUiColorsSystemMessage';

// Define the props for the FancyInputUnderline component
export type TFancyUnderline = {
  systemMessageType?: TUiColorsSystemMessage;
  isActive?: boolean;
  autoWidth?: boolean;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
  externalStyle?: CSSProp;
};
// --------------------------------------------------------------------------- //
// --------- The underline for the input components with state style --------- //
// --------------------------------------------------------------------------- //
export default function InputUnderline(props: TFancyUnderline & HTMLAttributes<HTMLElement>) {
  const { systemMessageType, isActive, autoWidth, layer = 4, themeType, externalStyle, ...htmlProps } = props;

  // Render the FancyInputUnderline component with the appropriate props
  return (
    <UnderLine
      $systemMessageType={systemMessageType}
      $themeType={themeType}
      $layer={layer}
      $isActive={isActive}
      $autoWidth={autoWidth}
      $externalStyle={externalStyle}
      {...htmlProps}
    />
  );
}
