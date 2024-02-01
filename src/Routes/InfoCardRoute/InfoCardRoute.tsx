import React from 'react';

import InfoCard from '../../components/molecules/InfoCard/InfoCard';
import { DesignArea, DesignWrapper } from '../DesignWrapper/Wrapper';
import FancyInfoCard from '../../components/templates/FancyInfoCard/FancyInfoCard';
import SVGCheckMark from '../../components/icons/SVGCheckMark/SVGCheckMark';

export default function InfoCardRoute() {
  return (
    <DesignWrapper>
      <DesignArea title="InfoCard">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <InfoCard sizeC="sm" themeType="success" />
          <InfoCard sizeC="md" themeType="error" />
          <InfoCard sizeC="lg" themeType="warning" layer={0} />
          <InfoCard sizeC="lg" themeType="info" layer={0} />
          <InfoCard>
            <span>InfoCard</span>
          </InfoCard>
          <FancyInfoCard
            outlined
            sizeC="sm"
            themeType="info"
            title="A Vergy good title"
            description="Mooiin Saying mooii jkjkjkdf jkjsjkfdsjfj sjkjkfsj kjjkfjsjkf jjsfjkskjfkjs jjkjk fsjjkfskjjkf n"
          />
          <FancyInfoCard
            sizeC="md"
            themeType="success"
            title="A Vergy good title"
            description="Mooiin Saying mooii jkjkjkdf jkjsjkfdsjfj sjkjkfsj kjjkfjsjkf jjsfjkskjfkjs jjkjk fsjjkfskjjkf n"
            icon={<SVGCheckMark />}
          />
          <FancyInfoCard
            sizeC="lg"
            outlined
            themeType="warning"
            title="A Vergy good title"
            description="Mooiin Saying mooii jkjkjkdf jkjsjkfdsjfj sjkjkfsj kjjkfjsjkf jjsfjkskjfkjs jjkjk fsjjkfskjjkf n"
            icon={<SVGCheckMark />}
          />
          <FancyInfoCard
            themeType="error"
            sizeC="sm"
            title="A Vergy good title"
            description="Mooiin Saying mooii jkjkjkdf jkjsjkfdsjfj sjkjkfsj kjjkfjsjkf jjsfjkskjfkjs jjkjk fsjjkfskjjkf n"
            icon={<SVGCheckMark />}
          />
        </div>
      </DesignArea>
    </DesignWrapper>
  );
}
