import React from 'react';

import { FancyFlexBoxProps } from './FancyFlexBox.model';
import { StyledFlexBox, StyledInlineFlexBox } from './FancyFlexBox.style';

//TODO: ADD DOCUMENTATION
// --------------------------------------------------------------------------- //
// ------------ A layout component that helps align with flex box ------------ //
// --------------------------------------------------------------------------- //
export default function FancyFlexBox(props: FancyFlexBoxProps) {
  const { children, inline, separator, ...flexAligns } = props;

  // Determine which container to use based on the inline prop.
  const Container = inline ? StyledInlineFlexBox : StyledFlexBox;

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
    <Container
      $flexAlign={flexAligns.flexAlign}
      $flexDirection={flexAligns.flexDirection}
      $flexJustify={flexAligns.flexJustify}
      $gap={flexAligns.gap}
    >
      {modifiedChilds}
    </Container>
  );
}
