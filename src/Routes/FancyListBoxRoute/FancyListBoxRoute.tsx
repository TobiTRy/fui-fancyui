import { DesignArea, DesignWrapper } from '@/Routes/DesignWrapper/Wrapper';
import FancyListBox from '@/components/organisms/FancyListBox/FancyListBox';

export default function FancyListBoxRoute() {
  return (
    <DesignWrapper>
      <DesignArea title="FancyListBox">
        <FancyListBox>
          <p>Moooiin</p>

          <p>Moooiin</p>
          <p>Moooiin</p>
          <p>Moooiin</p>
          <p>Moooiin</p>
          <p>Moooiin</p>
        </FancyListBox>
      </DesignArea>
    </DesignWrapper>
  );
}
