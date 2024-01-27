import React, { ReactNode } from 'react';
import { TitleWrapper } from '@/components/atoms/TitleForComponent/TitleForComponent.style';
import { TTypography, Typography } from '@/components/atoms/Typography';

import { TTitleForComponent } from './TTitleForComponent.model';

// --------------------------------------------------------------------------- //
// ------ This Component Wrapps only the component and adds a Wrapper -------- //
// --------------------------------------------------------------------------- //
export default function TitleForComponent(props: TTitleForComponent) {
  const { children, title, titleAlign } = props;

  return (
    <div>
      {title && <TitleWrapper $align={titleAlign}>{getCorrectTitle(title)}</TitleWrapper>}
      {children}
    </div>
  );
}

// --------------------------------------------------------------------------- //
// --------------------------- Helper Functions ------------------------------ //
// --------------------------------------------------------------------------- //
// This function checks if the title is a react element or a TTypography
const getCorrectTitle = (title: TTypography | ReactNode) => {
  if (React.isValidElement(title)) {
    return title; // title is already a react element
  } else {
    // title is a TTypography
    const { weight, type, ...typoProps } = title as TTypography;
    return <Typography type={type ?? 'h2'} weight={weight ?? 'bold'} {...typoProps} />;
  }
};
