import { DesignArea, DesignWrapper } from '../DesignWrapper/Wrapper';
import FancyInfoCard from '../../components/templates/FancyInfoCard/FancyInfoCard';
import SVGCheckMark from '../../components/icons/SVGCheckMark/SVGCheckMark';
import { FancyBox } from '../../components/atoms/FancyBox';
import FancyInfoText from '@/components/molecules/FancyInfoText/FancyInfoText';

export default function InfoCardRoute() {
  return (
    <DesignWrapper>
      <DesignArea title="InfoCard">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <FancyInfoText
            sizeC="md"
            directionTextGroup="row"
            align="center"
            icon={<SVGCheckMark />}
            title={'Moooin'}
            description="Mooiin"
          />

          <FancyBox sizeC="sm" themeType="success" />
          <FancyBox sizeC="md" themeType="error" />
          <FancyBox sizeC="lg" themeType="warning" layer={0} />
          <FancyBox sizeC="lg" themeType="info" layer={0} />
          <FancyBox>
            <span>InfoCard</span>
          </FancyBox>
          <FancyInfoCard
            outlined
            icon={<SVGCheckMark />}
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
