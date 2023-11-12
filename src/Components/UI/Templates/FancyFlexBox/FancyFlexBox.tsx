import React from 'react';

import { FancyFlexBoxProps } from './FancyFlexBox.model';
import { StyledFlexBox, StyledInlineFlexBox } from './FancyFlexBox.style';

// --------------------------------------------------------------------------- //
// ----------  ---------- //
// --------------------------------------------------------------------------- //
export default function FancyFlexBox(props: FancyFlexBoxProps) {
  const { children, inline, seperator } = props;

  const Container = inline ? StyledInlineFlexBox : StyledFlexBox; 

  const modifiedChilds = React.Children.map(children, (child, index) => {
    if (index === 0) {
      return child;
    }

    return (
      <>
        {seperator && seperator}
        {child}
      </>
    );
  });


  return <Container>{modifiedChilds}</Container>;
}
