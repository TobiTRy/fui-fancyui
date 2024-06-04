import { DesignArea, DesignWrapper } from '../DesignWrapper/Wrapper';

import FancyLine from '../../components/atoms/FancyLine/FancyLine';
import FancyFlexBox from '../../components/templates/FancyFlexBox/FancyFlexBox';
import FancyGrid from '../../components/templates/FancyGrid/FancyGrid';
import { FancyButton } from '../../../lib';

export default function FancyLayoutRoute() {
  return (
    <DesignWrapper>
      <DesignArea title="Fancy Grid" style={{ height: '100%', width: '100%' }}>
        <FancyGrid simpleGrid={6} gap="1rem">
          <FancyGrid.Item gridSpace={3} breakpoints={[{ breakpoint: '500px', gridSize: 6 }]}>
            <FancyButton label="Ji" wide />
          </FancyGrid.Item>
          <FancyGrid.Item gridSpace={3}>
            <FancyButton label="Ji" wide />
          </FancyGrid.Item>
          <FancyGrid.Item gridSpace={4}>
            <FancyButton label="Ji" wide />
          </FancyGrid.Item>
          <FancyGrid.Item gridSpace={4}>
            <FancyButton label="Ji" wide />
          </FancyGrid.Item>
          <FancyGrid.Item gridSpace={6}>
            <FancyButton label="Ji" wide />
          </FancyGrid.Item>
          <FancyGrid.Item gridSpace={3}>
            <FancyButton label="Ji" wide />
          </FancyGrid.Item>
          <FancyGrid.Item gridSpace={3}>
            <FancyButton label="Ji" wide />
          </FancyGrid.Item>
        </FancyGrid>
      </DesignArea>
      <DesignArea title="Fancy FlexBox">
        <FancyFlexBox
          separator={<FancyLine direction="horizontal" thickness="12px" margin={['12px', '0']} />}
          direction="column"
          gap="12px"
        >
          <FancyButton label="Ji" wide />
          <FancyButton label="Ji" wide />
          <FancyButton label="Ji" wide />
        </FancyFlexBox>
      </DesignArea>
    </DesignWrapper>
  );
}
