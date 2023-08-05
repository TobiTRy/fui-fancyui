import React from 'react';

import FancyPageList from '../../Components/UI/Molecules/FancyPageList/FancyPageList';
import { DesignWrapper, DesignArea } from '../DesignWrapper/Wrapper';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
  border-radius: 24px;
`


export default function PageSwitchRoute() {
  const JSXArry = Array.from({ length: 120}).map((_, i) => (
    <StyledDiv>
      <h1 key={i}>Moooin {i}</h1>
    </StyledDiv>
  ))

  return (
    <DesignWrapper>
      <DesignArea title='Paginator'>
        <FancyPageList itemsPerPage={10} elements={JSXArry} spacingBetweenItems='20px' />
      </DesignArea>
    </DesignWrapper>
  );
}
