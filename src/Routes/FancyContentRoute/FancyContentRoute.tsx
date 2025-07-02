import React from 'react';

import FancyContent from '../../components/molecules/FancyContent/FancyContent';

import SVGCheckMark from '../../components/icons/SVGCheckMark/SVGCheckMark';
import { DesignArea, DesignWrapper } from '../DesignWrapper/Wrapper';

export default function FancyContentRoute() {
  return (
    <DesignWrapper>
      <DesignArea title="FancyContent - New Grid Layouts">
        <h3>Normal Layout (2x2 Grid)</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
          <FancyContent layoutMode="normal">
            <FancyContent.Icon sizeC="sm" themeType="primary">
              <SVGCheckMark />
            </FancyContent.Icon>
            <FancyContent.Title sizeC="sm">Success Title</FancyContent.Title>
            <FancyContent.Description sizeC="sm">
              This is a description in the normal 2x2 grid layout
            </FancyContent.Description>
          </FancyContent>

          <FancyContent layoutMode="normal">
            <FancyContent.Icon sizeC="md" themeType="secondary">
              <SVGCheckMark />
            </FancyContent.Icon>
            <FancyContent.Title sizeC="md">No Description</FancyContent.Title>
          </FancyContent>

          <FancyContent layoutMode="normal" alignIcon="right">
            <FancyContent.Icon sizeC="sm" themeType="accent">
              <SVGCheckMark />
            </FancyContent.Icon>
            <FancyContent.Title sizeC="sm">Right-aligned Icon</FancyContent.Title>
            <FancyContent.Description sizeC="sm">Icon is now on the right side</FancyContent.Description>
          </FancyContent>

          <FancyContent layoutMode="normal" alignIcon="right">
            <FancyContent.Icon sizeC="md" themeType="warning">
              <SVGCheckMark />
            </FancyContent.Icon>
            <FancyContent.Title sizeC="md">Right Icon, No Description</FancyContent.Title>
          </FancyContent>
        </div>

        <h3>Stack Layout (Single Column)</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
          <FancyContent layoutMode="stack">
            <FancyContent.Icon sizeC="lg" themeType="accent">
              <SVGCheckMark />
            </FancyContent.Icon>
            <FancyContent.Title sizeC="lg">Stacked Layout</FancyContent.Title>
            <FancyContent.Description sizeC="lg">
              Everything is stacked vertically in a single column
            </FancyContent.Description>
          </FancyContent>

          <FancyContent layoutMode="stack">
            <FancyContent.Icon sizeC="md" themeType="warning">
              <SVGCheckMark />
            </FancyContent.Icon>
            <FancyContent.Title sizeC="md">Stack without Description</FancyContent.Title>
          </FancyContent>
        </div>

        <h3>Auto Layout (Smart Detection)</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
          <FancyContent layoutMode="auto">
            <FancyContent.Icon sizeC="sm" themeType="primary">
              <SVGCheckMark />
            </FancyContent.Icon>
            <FancyContent.Title sizeC="sm">Auto Layout</FancyContent.Title>
            <FancyContent.Description sizeC="sm">
              Auto mode chooses the best layout automatically
            </FancyContent.Description>
          </FancyContent>

          <FancyContent layoutMode="auto">
            <FancyContent.Title sizeC="md">No Icon Auto</FancyContent.Title>
            <FancyContent.Description sizeC="md">Layout without icon</FancyContent.Description>
          </FancyContent>
        </div>

        <h3>With Images</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <FancyContent layoutMode="normal">
            <FancyContent.Image sizeH="sm">
              <img src="https://via.placeholder.com/64" alt="placeholder" />
            </FancyContent.Image>
            <FancyContent.Title>Image + Title</FancyContent.Title>
          </FancyContent>

          <FancyContent layoutMode="stack">
            <FancyContent.Image sizeH="sm">
              <img src="https://via.placeholder.com/64" alt="placeholder" />
            </FancyContent.Image>
            <FancyContent.Title>Stacked Image</FancyContent.Title>
            <FancyContent.Description>With description below</FancyContent.Description>
          </FancyContent>
        </div>
      </DesignArea>
    </DesignWrapper>
  );
}
