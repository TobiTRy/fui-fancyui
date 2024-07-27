'use client';

import React, { ReactNode } from 'react';

import { TitleWrapper, Wrapper } from '@/components/atoms/TitleForComponent/TitleForComponent.style';
import { TTypography, Typography } from '@/components/atoms/Typography';

import { TTitleForComponent } from './TTitleForComponent.model';

// --------------------------------------------------------------------------- //
// ------ This Component Wrapps only the component and adds a Wrapper -------- //
// --------------------------------------------------------------------------- //
export default function TitleForComponent(props: TTitleForComponent) {
  const { children, title, align, gap = 'xs' } = props;

  return (
    <Wrapper $spacing={gap}>
      {title && <TitleWrapper $align={align}>{getCorrectTitle(title)}</TitleWrapper>}
      {children}
    </Wrapper>
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
    const { fontWeight, variant, ...typoProps } = title as TTypography;
    return <Typography variant={variant ?? 'sectionTitle'} fontWeight={fontWeight ?? 'bold'} {...typoProps} />;
  }
};
