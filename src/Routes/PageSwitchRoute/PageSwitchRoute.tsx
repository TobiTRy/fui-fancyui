import React from 'react';

import FancyPageList from '../../Components/UI/Molecules/FancyPageList/FancyPageList';
import { DesignWrapper, DesignArea } from '../DesignWrapper/Wrapper';
import { styled } from 'styled-components';
import { FancyCard } from '@/Components/UI/Atoms/FancyCard';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
  border-radius: 24px;
`;

export default function PageSwitchRoute() {
  const JSXArry = Array.from({ length: 120 }).map((_, i) => (
    <StyledDiv>
      <h1 key={i}>Moooin {i}</h1>
    </StyledDiv>
  ));

  return (
    <FancyCard>
      <DesignWrapper>
        <DesignArea title="Paginator" style={{ maxWidth: '60%', display: 'flex', justifyContent: 'center', width: '100%' }}>
          <FancyPageList itemsPerPage={10} pageLimits={5} elements={JSXArry} spacingBetweenItems="20px" />
        </DesignArea>
      </DesignWrapper>
    </FancyCard>
  );
}
