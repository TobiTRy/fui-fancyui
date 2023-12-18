import React from 'react';

import FancyContent from '../../components/molecules/FancyContent/FancyContent';

import SVGCheckMark from '../../components/icons/SVGCheckMark/SVGCheckMark';
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
        <FancyContent flexAlign="flex-start" flexJustify="center" gapBetweenIcon="12px">
          <FancyContent.Image
            size="sm"
            rounded="complete"
            src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
          />
          <FancyContent.Description>Hiii</FancyContent.Description>
          <FancyContent.Title>Hiii</FancyContent.Title>
        </FancyContent>
      </DesignArea>
    </DesignWrapper>
  );
}
