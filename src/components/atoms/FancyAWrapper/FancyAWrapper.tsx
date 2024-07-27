'use client';

import { FancyAWrapperStyle } from './FancyAWrpper.style';
import { TFancyAWrapperWithHTMLAttrs } from './TFancyAWrapper.model';

export default function FancyAWrapper(props: TFancyAWrapperWithHTMLAttrs) {
  const { children, externalStyle, themeType = 'secondary', isActive, isHoverable, layer = 0, ...htmlProps } = props;

  return (
    <FancyAWrapperStyle
      $themeType={themeType}
      $layer={layer}
      $isActive={isActive}
      $isHoverable={isHoverable}
      $externalStyle={externalStyle}
      {...htmlProps}
    >
      {children}
    </FancyAWrapperStyle>
  );
}
