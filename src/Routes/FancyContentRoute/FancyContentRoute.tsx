import React from 'react';

import FancyContent from '../../Components/Molecules/FancyContent/FancyContent';

import SVGCheckMark from '../../Components/SVGIcons/SVGCheckMark/SVGCheckMark';
import { DesignArea, DesignWrapper } from '../DesignWrapper/Wrapper';

export default function FancyContentRoute() {
  return (
    <DesignWrapper>
      <DesignArea title="FancyContent">
        <FancyContent flexAlign="flex-start" flexJustify="center">
          <FancyContent.Icon size="lg">{<SVGCheckMark />}</FancyContent.Icon>
          <FancyContent.Description>Hiii</FancyContent.Description>
          <FancyContent.Title>Hiii</FancyContent.Title>
        </FancyContent>
      </DesignArea>
    </DesignWrapper>
  );
}
