import React from 'react';

import FancyContent from '../../components/molecules/FancyContent/FancyContent';

import SVGCheckMark from '../../components/icons/SVGCheckMark/SVGCheckMark';
import { DesignArea, DesignWrapper } from '../DesignWrapper/Wrapper';
import { disabledStyle } from '@/design/designFunctions/disabledStyle';

export default function FancyContentRoute() {
  return (
    <DesignWrapper>
      <DesignArea title="FancyContent">
        <FancyContent align="flex-start" justify="center">
          <FancyContent.Icon sizeC="sm" themeType="primary">
            <SVGCheckMark />
          </FancyContent.Icon>
          <FancyContent.Title sizeC="sm">Hiii</FancyContent.Title>
          <FancyContent.Description sizeC="sm">Hiii</FancyContent.Description>
        </FancyContent>

        <FancyContent align="flex-start" justify="center">
          <FancyContent.Icon sizeC="md" themeType="primary">
            <SVGCheckMark />
          </FancyContent.Icon>
          <FancyContent.Title sizeC="md">Hiii</FancyContent.Title>
          <FancyContent.Description sizeC="md">Hiii</FancyContent.Description>
        </FancyContent>

        <FancyContent align="flex-start" justify="center">
          <FancyContent.Icon sizeC="lg" themeType="primary">
            <SVGCheckMark />
          </FancyContent.Icon>
          <FancyContent.Title sizeC="lg">Hiii</FancyContent.Title>
          <FancyContent.Description sizeC="lg">Hiii</FancyContent.Description>
        </FancyContent>

        <FancyContent align="center" justify="center">
          <FancyContent.Image sizeH="sm">
            <img src="https://via.placeholder.com/150" alt="placeholder" />
          </FancyContent.Image>
          <FancyContent.Title>Hiii</FancyContent.Title>
        </FancyContent>
      </DesignArea>
    </DesignWrapper>
  );
}
