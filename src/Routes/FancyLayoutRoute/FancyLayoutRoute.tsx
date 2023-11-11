import React from 'react';
import { DesignArea, DesignWrapper } from '../DesignWrapper/Wrapper';

import FancyGrid from '../../Components/UI/Templates/FancyGrid/FancyGrid';
import { FancyButton } from '../../lib';

export default function FancyLayoutRoute() {
  return (
    <DesignWrapper>
      <DesignArea title="Fancy Grid" style={{height: '100%', width: '100%'}}>
        <FancyGrid grid={6} space="1rem">
          <FancyGrid.Item gridSpace={6}>
            <FancyButton label='Ji' wide/>
          </FancyGrid.Item>
          <FancyGrid.Item gridSpace={4}>
            <FancyButton label='Ji' wide/>
          </FancyGrid.Item>
          <FancyGrid.Item gridSpace={4}>
            <FancyButton label='Ji' wide/>
          </FancyGrid.Item>
          <FancyGrid.Item gridSpace={6}>
            <FancyButton label='Ji' wide/>
          </FancyGrid.Item>
          <FancyGrid.Item gridSpace={3}>
            <FancyButton label='Ji' wide/>
          </FancyGrid.Item>
          <FancyGrid.Item gridSpace={3}>
            <FancyButton label='Ji' wide/>
          </FancyGrid.Item>
        </FancyGrid>
      </DesignArea>
    </DesignWrapper>
  );
}
