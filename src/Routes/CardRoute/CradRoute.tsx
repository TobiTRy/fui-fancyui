import React from 'react';

import Card from '../../components/atoms/Card/Card';
import { DesignArea, DesignWrapper } from '../DesignWrapper/Wrapper';
import FancyCard from '../../components/molecules/FancyCard/FancyCard';
import { css } from 'styled-components';

export default function CradRoute() {
  const backgroundColor = css`
    background-color: #235179;
    padding: 1rem;
    border-radius: 1rem;
    text-align: center;
    align-items: center;
  `;

  return (
    <DesignWrapper>
      <DesignArea title="Card for Content with static size" style={backgroundColor}>
        <Card />
      </DesignArea>
      <DesignArea title="Card for Content dynamic" style={backgroundColor}>
        <Card borderRadius="xxl">
          <h1>Hello</h1>
          <h1>World</h1>
          <h1>World</h1>
        </Card>
      </DesignArea>
      <DesignArea title="Card for Content with static size" style={backgroundColor}>
        <FancyCard />
      </DesignArea>
    </DesignWrapper>
  );
}
