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
          <FancyContent.Title>Hiii</FancyContent.Title>
          <FancyContent.Description>Hiii</FancyContent.Description>
        </FancyContent>

        <FancyContent align="flex-start" justify="center" gapBetweenIcon="12px">
          <FancyContent.Description>Hiii</FancyContent.Description>
          <FancyContent.Title>Hiii</FancyContent.Title>
        </FancyContent>

        <FancyContent align="center" justify="center" gapBetweenIcon="12px">
          <FancyContent.Image sizeH="sm">
            <img src="https://via.placeholder.com/150" alt="placeholder" />
          </FancyContent.Image>
          <FancyContent.Title>Hiii</FancyContent.Title>
        </FancyContent>
      </DesignArea>
    </DesignWrapper>
  );
}
