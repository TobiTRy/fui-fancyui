import React from 'react';

import FancySingleInputs from '../../Components/UI/Organisms/FancySingleInputs/FancySingleInputs';
import { DesignArea, DesignWrapper } from '../DesignWrapper/Wrapper';
import { FancyCard } from '../../lib';

// the home route for the single number Input
export default function SingleNumberInputRoute() {
  return (
    <FancyCard>
      <DesignWrapper>
        <DesignArea title="Verification Input">
          <FancySingleInputs />
        </DesignArea>
      </DesignWrapper>
    </FancyCard>
  );
}
