import React from 'react';

import FancyContent from '../../Components/UI/Molecules/FancyContent/FancyContent';

import SVGCheckMark from '../../Components/UI/SVGIcons/SVGCheckMark';
import { DesignArea, DesignWrapper } from '../DesignWrapper/Wrapper';

export default function FancyContentRoute() {
  return (
    <DesignWrapper>
      <DesignArea title="FancyContent">
        <FancyContent>
          <FancyContent.Icon size="sm">{<SVGCheckMark />}</FancyContent.Icon>
          <FancyContent.Text size="sm" bold={false}>
            Hiii
          </FancyContent.Text>
        </FancyContent>
      </DesignArea>
    </DesignWrapper>
  );
}
