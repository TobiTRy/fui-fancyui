import React from 'react';
import { css } from 'styled-components';

import { TFancyFlexBoxProps, TDynamicElementProps } from './FancyFlexBox.model';
import { StyledFlexBox } from './FancyFlexBox.style';

// --------------------------------------------------------------------------- //
// ------------ A layout component that helps align with flex box ------------ //
// --------------------------------------------------------------------------- //
export type TFancyFlexBox<T extends React.ElementType = 'div'> = TDynamicElementProps<T> & TFancyFlexBoxProps;
export default function FancyFlexBox<T extends React.ElementType = 'div'>(props: TFancyFlexBox<T>) {
  const { children, separator, externalStyle, align, direction, justify, fitBox, gap, as, ...htmlElProps } =
    props;

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
      $align={align}
      $direction={direction}
      $justify={justify}
      $gap={gap}
      $externalStyle={css`
        ${fitBox &&
        css`
          height: 100%;
        `}
        ${externalStyle}
      `}
      {...htmlElProps}
    >
      {modifiedChilds}
    </StyledFlexBox>
  );
}
