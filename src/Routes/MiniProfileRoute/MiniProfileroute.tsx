import React from 'react';

import FancyMiniProfile from '../../components/molecules/FancyMiniProfile/FancyMiniProfile';
import MiniProfile from '@/components/molecules/MiniProfile/MiniProfile';

import { DesignWrapper, DesignArea } from '../DesignWrapper/Wrapper';
import { FancyCard } from '@/components/atoms/FancyCard';
import { Chip } from '@/components/molecules/Chip';

export default function MiniProfileroute() {
  return (
    <FancyCard>
      <DesignWrapper>
        <DesignArea title="MiniProfile">
          <div style={{ display: 'flex', gap: '12px' }}>
            <MiniProfile>
              <MiniProfile.Image
                size="sm"
                rounded="complete"
                src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
              />

              <MiniProfile.Content>
                <MiniProfile.Content.Title size="sm">Tobiii</MiniProfile.Content.Title>
              </MiniProfile.Content>
            </MiniProfile>

            <Chip size="sm">
              <Chip.Content externalStyle={{ height: '100%' }}>
                <Chip.Content.Image
                  size="complete"
                  src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
                ></Chip.Content.Image>
                <Chip.Content.Title size="sm">Tobiii</Chip.Content.Title>
              </Chip.Content>
            </Chip>
          </div>
        </DesignArea>
        <DesignArea title="MiniProfile">
          <div style={{ display: 'flex', gap: '12px' }}>
            <MiniProfile />
            <FancyMiniProfile
              alignText="right"
              size={'sm'}
              headingText="TobiTRy"
              subHeadingText="@TobiTRy"
              src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
            />
            <FancyMiniProfile
              alignText="right"
              size={'sm'}
              headingText="TobiTRy"
              src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
            />
            <FancyMiniProfile
              alignText="right"
              size={'sm'}
              headingText="TobiTRy"
              subHeadingText="@TobiTRy"
              src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
            />
          </div>
        </DesignArea>
        <DesignArea title="MiniProfile">
          <div style={{ display: 'flex', gap: '12px' }}>
            <FancyMiniProfile
              alignText="right"
              size={'md'}
              headingText="TobiTRy"
              subHeadingText="@TobiTRy"
              src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
            />
            <FancyMiniProfile
              alignText="right"
              size={'md'}
              headingText="TobiTRy"
              src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
            />
            <FancyMiniProfile
              alignText="right"
              size={'md'}
              headingText="TobiTRy"
              subHeadingText="@TobiTRy"
              src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
            />
          </div>
        </DesignArea>
        <DesignArea title="MiniProfile">
          <div style={{ display: 'flex', gap: '12px' }}>
            <FancyMiniProfile
              alignText="right"
              size={'lg'}
              headingText="TobiTRy"
              subHeadingText="@TobiTRy"
              src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
            />
            <FancyMiniProfile
              alignText="right"
              size={'lg'}
              headingText="TobiTRy"
              subHeadingText="@TobiTRy"
              src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
            />
            <FancyMiniProfile
              alignText="right"
              size={'lg'}
              headingText="TobiTRy"
              subHeadingText="@TobiTRy"
              src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
            />
          </div>
        </DesignArea>
      </DesignWrapper>
    </FancyCard>
  );
}
