import React from 'react';

import FancyBoxSet from '@/Components/UI/Organisms/FancyBoxSet/FancyBoxSet';
import { DesignArea, DesignWrapper } from '../DesignWrapper/Wrapper';

export default function FancyBoxSetRoute() {
  return (
    <DesignWrapper>
      <DesignArea title="BoxSet">
        <FancyBoxSet label="Heyyyho" fontVariantLegend="h3">
          <p>Hiii</p>
          <p>Hiii</p>
          <p>Hiii</p>
          <p>Hiii</p>
          <p>Hiii</p>
          <p>Hiii</p>
        </FancyBoxSet>
      </DesignArea>
    </DesignWrapper>
  );
}
