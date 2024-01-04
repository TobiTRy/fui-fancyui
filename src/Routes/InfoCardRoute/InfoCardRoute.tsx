import React from 'react';

import InfoCard from '../../components/molecules/InfoCard/InfoCard';
import { DesignArea, DesignWrapper } from '../DesignWrapper/Wrapper';
import FancyInfoCard from '../../components/templates/FancyInfoCard/FancyInfoCard';
import SVGCheckMark from '../../components/icons/SVGCheckMark/SVGCheckMark';

export default function InfoCardRoute() {
  return (
    <DesignWrapper>
      <DesignArea title="InfoCard">
        <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
          <InfoCard size="sm" themeType="success" />
          <InfoCard size="md" themeType="error" />
          <InfoCard size="lg" themeType="warning" layer={0} />
          <InfoCard size="lg" themeType="info" layer={0} />
          <InfoCard>
            <span>InfoCard</span>
          </InfoCard>
          <FancyInfoCard
            size="sm"
            themeType="info"
            title="A Vergy good title"
            description="Mooiin Saying mooii jkjkjkdf jkjsjkfdsjfj sjkjkfsj kjjkfjsjkf jjsfjkskjfkjs jjkjk fsjjkfskjjkf n"
          />
          <FancyInfoCard
            size="md"
            themeType="success"
            title="A Vergy good title"
            description="Mooiin Saying mooii jkjkjkdf jkjsjkfdsjfj sjkjkfsj kjjkfjsjkf jjsfjkskjfkjs jjkjk fsjjkfskjjkf n"
            icon={<SVGCheckMark />}
          />
          <FancyInfoCard
            size="lg"
            themeType="warning"
            title="A Vergy good title"
            description="Mooiin Saying mooii jkjkjkdf jkjsjkfdsjfj sjkjkfsj kjjkfjsjkf jjsfjkskjfkjs jjkjk fsjjkfskjjkf n"
            icon={<SVGCheckMark />}
          />
          <FancyInfoCard
            themeType="error"
            title="A Vergy good title"
            description="Mooiin Saying mooii jkjkjkdf jkjsjkfdsjfj sjkjkfsj kjjkfjsjkf jjsfjkskjfkjs jjkjk fsjjkfskjjkf n"
            icon={<SVGCheckMark />}
          />
        </div>
      </DesignArea>
    </DesignWrapper>
  );
}
