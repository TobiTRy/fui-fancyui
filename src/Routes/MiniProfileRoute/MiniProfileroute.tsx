import React from 'react';

import FancyMiniProfile from '../../components/molecules/FancyMiniProfile/FancyMiniProfile';

import { DesignWrapper, DesignArea } from '../DesignWrapper/Wrapper';
import { Card } from '@/components/atoms/Card';

export default function MiniProfileroute() {
  return (
    <Card>
      <DesignWrapper>
        <DesignArea title="MiniProfile">
          <div style={{ display: 'flex', gap: '12px' }}>
            <FancyMiniProfile
              size="sm"
              alignImage="right"
              title="TobiTRy"
              src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
            />
            <FancyMiniProfile
              size="md"
              alignImage="right"
              title="TobiTRy"
              src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
            />
            <FancyMiniProfile
              size="lg"
              alignImage="right"
              title="TobiTRy"
              subTitle="@TobiTRy"
              src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
            />
          </div>
        </DesignArea>
        <DesignArea title="MiniProfile">
          <div style={{ display: 'flex', gap: '12px' }}>
            <FancyMiniProfile
              size="sm"
              alignImage="left"
              title="TobiTRy"
              src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
            />
            <FancyMiniProfile
              size="md"
              alignImage="left"
              title="TobiTRy"
              subTitle="@TobiTRy"
              src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
            />
            <FancyMiniProfile
              size="lg"
              alignImage="left"
              title="TobiTRy"
              src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
            />
          </div>
        </DesignArea>
        <DesignArea title="MiniProfile">
          <div style={{ display: 'flex', gap: '12px' }}>
            <FancyMiniProfile
              alignImage="right"
              size={'sm'}
              title="TobiTRy"
              subTitle="@TobiTRy"
              src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
            />
            <FancyMiniProfile
              alignImage="right"
              size={'sm'}
              title="TobiTRy"
              src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
            />
            <FancyMiniProfile
              alignImage="right"
              size={'sm'}
              title="TobiTRy"
              subTitle="@TobiTRy"
              src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
            />
          </div>
        </DesignArea>
        <DesignArea title="MiniProfile">
          <div style={{ display: 'flex', gap: '12px' }}>
            <FancyMiniProfile
              alignImage="right"
              size={'md'}
              title="TobiTRy"
              subTitle="@TobiTRy"
              src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
            />
            <FancyMiniProfile
              alignImage="right"
              size={'md'}
              title="TobiTRy"
              src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
            />
            <FancyMiniProfile
              alignImage="right"
              size={'md'}
              title="TobiTRy"
              subTitle="@TobiTRy"
              src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
            />
          </div>
        </DesignArea>
        <DesignArea title="MiniProfile">
          <div style={{ display: 'flex', gap: '12px' }}>
            <FancyMiniProfile
              alignImage="right"
              size={'lg'}
              title="TobiTRy"
              subTitle="@TobiTRy"
              src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
            />
            <FancyMiniProfile
              alignImage="right"
              size={'lg'}
              title="TobiTRy"
              subTitle="@TobiTRy"
              src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
            />
            <FancyMiniProfile
              alignImage="right"
              size={'lg'}
              title="TobiTRy"
              subTitle="@TobiTRy"
              src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
            />
          </div>
        </DesignArea>
      </DesignWrapper>
    </Card>
  );
}
