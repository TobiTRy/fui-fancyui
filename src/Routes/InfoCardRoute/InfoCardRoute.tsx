import { DesignArea, DesignWrapper } from '../DesignWrapper/Wrapper';
import FancyInfoCard from '../../components/templates/FancyInfoCard/FancyInfoCard';
import SVGCheckMark from '../../components/icons/SVGCheckMark/SVGCheckMark';
import { FancyBox } from '../../components/atoms/FancyBox';
import { SystemMessageBox } from '@/components/atoms/SystemMessageBox';
import FancySystemMessageBox from '@/components/templates/FancySystemMessageBox/FancySystemMessageBox';

export default function InfoCardRoute() {
  return (
    <DesignWrapper>
      <DesignArea title="InfoCard">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <SystemMessageBox>
            <SVGCheckMark />
            <span>Moooiin</span>
          </SystemMessageBox>
          <FancySystemMessageBox sizeC="sm" title="Tesasas" description="Mooiin" icon={<SVGCheckMark />} />
          <FancySystemMessageBox sizeC="md" title="Tesasas" />
          <FancySystemMessageBox sizeC="lg" themeType="error" title="Tesasas" />
          <FancySystemMessageBox sizeC="md" description="Moooiin22" />
          <FancySystemMessageBox themeType="success" sizeC="md" icon={<SVGCheckMark />} description="Moooiin22" />
          <FancySystemMessageBox
            themeType="info"
            sizeC="md"
            icon={<SVGCheckMark />}
            description="Moooiin2 kdskldsv kls kklskcks kklsklsckksclcls  lskscklklcskl  2"
          />
          <FancySystemMessageBox themeType="warning" sizeC="md" description="Moooiin22" />
          <FancySystemMessageBox
            sizeC="lg"
            icon={<SVGCheckMark />}
            title={'Moooin'}
            description="Moooiin2 kdskldsv kls kklskcks kklsklsckksclcls  lskscklklcskl sokkkl lkskdklsdkk skdslks  2"
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
