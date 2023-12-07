import React from 'react';

import { TFancyFlexBoxProps, TDynamicElementProps } from './FancyFlexBox.model';
import { StyledFlexBox } from './FancyFlexBox.style';

// --------------------------------------------------------------------------- //
// ------------ A layout component that helps align with flex box ------------ //
// --------------------------------------------------------------------------- //
export default function FancyFlexBox<T extends React.ElementType = 'div'>(
  props: TDynamicElementProps<T> & TFancyFlexBoxProps
) {
  const { children, separator, externalStyle, flexAlign, flexDirection, flexJustify, gap, as, ...htmlElProps } = props;

  // Modify the children components to include a separator if specified.
  const modifiedChilds = separator
    ? React.Children.map(children, (child, index) => {
        if (index === 0) return child as React.ReactElement;
        return (
          <>
            {separator}
            {child}
          </>
        );
      })
    : children;

  // Render the flexbox container with the modified children components and flex alignment props.
  return (
    <StyledFlexBox
      as={as ?? 'div'}
      $flexAlign={flexAlign}
      $flexDirection={flexDirection}
      $flexJustify={flexJustify}
      $gap={gap}
      $externalStyle={externalStyle}
      {...htmlElProps}
    >
      {modifiedChilds}
    </StyledFlexBox>
  );
}
