import React from 'react';

import FancyContent from '../../components/molecules/FancyContent/FancyContent';

import SVGCheckMark from '../../components/icons/SVGCheckMark/SVGCheckMark';
import { DesignArea, DesignWrapper } from '../DesignWrapper/Wrapper';
import { disabledStyle } from '@/design/designFunctions/disabledStyle';

export default function FancyContentRoute() {
  return (
    <DesignWrapper>
      <DesignArea title="FancyContent">
        <FancyContent align="flex-start" justify="center" externalStyle={disabledStyle}>
          <FancyContent.Icon sizeC="xs" themeType="primary">
            <SVGCheckMark />
          </FancyContent.Icon>
          <FancyContent.Title themeType="primary">Hiii</FancyContent.Title>
          <FancyContent.Description>Hiii</FancyContent.Description>
        </FancyContent>

        <FancyContent align="flex-start" justify="center" gapBetweenIcon="12px">
          <FancyContent.Description>Hiii</FancyContent.Description>
          <FancyContent.Title>Hiii</FancyContent.Title>
        </FancyContent>
      </DesignArea>
    </DesignWrapper>
  );
}
