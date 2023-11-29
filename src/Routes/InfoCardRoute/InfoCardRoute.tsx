import React from 'react';

import InfoCard from '../../Components/Molecules/InfoCard/InfoCard';
import { DesignArea, DesignWrapper } from '../DesignWrapper/Wrapper';
import FancyInfoCard from '../../Components/Templates/FancyInfoCard/FancyInfoCard';
import SVGCheckMark from '../../Components/SVGIcons/SVGCheckMark/SVGCheckMark';

export default function InfoCardRoute() {
  return (
    <DesignWrapper>
      <DesignArea title="InfoCard">
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
      </DesignArea>
    </DesignWrapper>
  );
}
