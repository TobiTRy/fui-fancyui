import React from 'react';

import { FancyFlexBoxProps } from './FancyFlexBox.model';
import { StyledFlexBox } from './FancyFlexBox.style';

// --------------------------------------------------------------------------- //
// ------------ A layout component that helps align with flex box ------------ //
// --------------------------------------------------------------------------- //
export default function FancyFlexBox(props: FancyFlexBoxProps) {
  const { children, separator, externalStyle, ...flexAlign } = props;

  // Modify the children components to include a separator if specified.
  const modifiedChilds = separator
    ? React.Children.map(children, (child, index) => {
        if (index === 0) return child;
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
      as={flexAlign.as ?? 'div'}
      $flexAlign={flexAlign.flexAlign}
      $flexDirection={flexAlign.flexDirection}
      $flexJustify={flexAlign.flexJustify}
      $gap={flexAlign.gap}
      $externalStyle={externalStyle}
    >
      {modifiedChilds}
    </StyledFlexBox>
  );
}
