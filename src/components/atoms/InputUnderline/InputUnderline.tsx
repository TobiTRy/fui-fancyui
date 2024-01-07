import { HTMLAttributes } from 'react';

import { TLayer } from '@/types/TLayer';

import { UnderLine } from '@/components/atoms/InputUnderline/InputUnderline.style';
import { TThemeTypesNotTransparent } from '@/types/TThemeTypesNotTransparent';
import { TUiColorsSystemMessage } from '@/types/TUiColorsSystemMessage';

// Define the props for the FancyInputUnderline component
export type TFancyUnderline = {
  systemMessageType?: TUiColorsSystemMessage;
  isActive?: boolean;
  autoWidth?: boolean;
  themeType?: TThemeTypesNotTransparent;
  layer?: TLayer;
};
// --------------------------------------------------------------------------- //
// --------- The underline for the input components with state style --------- //
// --------------------------------------------------------------------------- //
export default function InputUnderline(props: TFancyUnderline & HTMLAttributes<HTMLElement>) {
  const { systemMessageType, isActive, autoWidth, layer = 4, themeType, ...htmlProps } = props;

  // Render the FancyInputUnderline component with the appropriate props
  return (
    <UnderLine
      $systemMessageType={systemMessageType}
      $themeType={themeType}
      $layer={layer}
      $isActive={isActive}
      $autoWidth={autoWidth}
      {...htmlProps}
    />
  );
}
