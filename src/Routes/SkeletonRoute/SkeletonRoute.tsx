import { DesignArea, DesignWrapper } from '@/Routes/DesignWrapper/Wrapper';
import { SkeletonBox } from '@/components/atoms/SkeletonBox';
import FancyGridTemplate from '@/components/templates/FancyGridTemplate/FancyGridTemplate';
export default function SkeletonRoute() {
  return (
    <DesignWrapper>
      <DesignArea title="Skeleton">
        <FancyGridTemplate gridAreas={['a a b b b b', 'a a c c c c']}>
          <FancyGridTemplate.GridAreaItem gridArea="a">
            <SkeletonBox sizeH="fit" sizeW="fit" />
          </FancyGridTemplate.GridAreaItem>
          <FancyGridTemplate.GridAreaItem gridArea="b">
            <SkeletonBox sizeH="fit" sizeW="fit" />
          </FancyGridTemplate.GridAreaItem>
          <FancyGridTemplate.GridAreaItem gridArea="c">
            <SkeletonBox sizeH="fit" sizeW="fit" />
          </FancyGridTemplate.GridAreaItem>
        </FancyGridTemplate>
      </DesignArea>
    </DesignWrapper>
  );
}
