import React from 'react'
import styled from 'styled-components'

import IHeadLine from './FancyModalHeadLine.model';
import Typography from '../../Atoms/Typography/Typography';
import { spacingPx } from '../../Design/design';
import FancyHR from '../../Atoms/FancyHR/FancyHR';

const StyledHeadLine = styled.div<{$alignCenter?: boolean}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: ${spacingPx.xxs};
  align-items: ${({ $alignCenter }) => $alignCenter ? 'center' : 'flex-start'}; 

  hr {
    margin-top: ${spacingPx.xs};
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
      { title && <Typography type='h2'>{ title }</Typography> }
      { subTitle && <Typography type='h3' variant='h4' weight='normal'>{ subTitle }</Typography> }
      { (hr && (title || subTitle))  && <FancyHR />}
    </StyledHeadLine>
  )
}
