import React from 'react';

import FancyMiniProfile from '../../components/molecules/FancyMiniProfile/FancyMiniProfile';

import { DesignWrapper, DesignArea } from '../DesignWrapper/Wrapper';
import { Card } from '@/components/molecules/Card';

export default function MiniProfileroute() {
  return (
    <Card>
      <DesignWrapper>
        <DesignArea title="MiniProfile">
          <div style={{ display: 'flex', gap: '12px' }}>
            <FancyMiniProfile
              sizeC="sm"
              alignImage="right"
              title="TobiTRy"
              src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
            />
            <FancyMiniProfile
              sizeC="md"
              alignImage="right"
              title="TobiTRy"
              src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
            />
            <FancyMiniProfile
              sizeC="lg"
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
              sizeC="sm"
              alignImage="left"
              title="TobiTRy"
              src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
            />
            <FancyMiniProfile
              sizeC="md"
              alignImage="left"
              title="TobiTRy"
              subTitle="@TobiTRy"
              src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
            />
            <FancyMiniProfile
              sizeC="lg"
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
              sizeC={'sm'}
              title="TobiTRy"
              subTitle="@TobiTRy"
              src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
            />
            <FancyMiniProfile
              alignImage="right"
              sizeC={'sm'}
              title="TobiTRy"
              src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
            />
            <FancyMiniProfile
              alignImage="right"
              sizeC={'sm'}
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
              sizeC={'md'}
              title="TobiTRy"
              subTitle="@TobiTRy"
              src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
            />
            <FancyMiniProfile
              alignImage="right"
              sizeC={'md'}
              title="TobiTRy"
              src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
            />
            <FancyMiniProfile
              alignImage="right"
              sizeC={'md'}
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
              sizeC={'lg'}
              title="TobiTRy"
              subTitle="@TobiTRy"
              src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
            />
            <FancyMiniProfile
              alignImage="right"
              sizeC={'lg'}
              title="TobiTRy"
              subTitle="@TobiTRy"
              src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
            />
            <FancyMiniProfile
              alignImage="right"
              sizeC={'lg'}
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
