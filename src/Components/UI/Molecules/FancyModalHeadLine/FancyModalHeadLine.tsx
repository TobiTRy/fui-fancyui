import React from 'react'
import IHeadLine from './FancyModalHeadLine.model';

import { spacingPx } from '../../Design/design';

import styled from 'styled-components'
import FancyHR from '../../Atoms/FancyHR/FancyHR';

const StyledHeadLine = styled.div<{$alignCenter?: boolean}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: ${spacingPx.sm};
  align-items: ${({ $alignCenter }) => $alignCenter ? 'center' : 'flex-start'}; 

  h2 {
    margin: 0;
  }

  hr {
    width: 100%;
  }
`;

// --------------------------------------------------------------------------- //
// -------- The main HeadLineComponent for the heading for the modals -------- //
// --------------------------------------------------------------------------- //
export default function FancyModalHeadLine(props: IHeadLine) {
  const { title, subTitle, alignCenter = true, hr = true } = props;

  return (
    <StyledHeadLine $alignCenter={alignCenter}>
      { title && <h2>{ title }</h2> }
      { subTitle && <p>{ subTitle }</p> }
      { (hr && (title || subTitle))  && <FancyHR />}
    </StyledHeadLine>
  )
}
