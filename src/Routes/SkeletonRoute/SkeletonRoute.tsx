import { DesignArea, DesignWrapper } from '@/Routes/DesignWrapper/Wrapper';
import { SkeletonBox } from '@/components/atoms/SkeletonBox';
import FancyGridTemplate from '@/components/templates/FancyGridTemplate/FancyGridTemplate';
export default function SkeletonRoute() {
  return (
    <DesignWrapper>
      <DesignArea title="Skeleton">
        <FancyGridTemplate height="100px" gridAreas={['a a b b b b', 'a a c c c c']}>
          <FancyGridTemplate.GridItem gridArea="a">
            <SkeletonBox sizeH="fit" sizeW="fit" />
          </FancyGridTemplate.GridItem>
          <FancyGridTemplate.GridItem gridArea="b">
            <SkeletonBox sizeH="fit" sizeW="fit" />
          </FancyGridTemplate.GridItem>
          <FancyGridTemplate.GridItem gridArea="c">
            <SkeletonBox sizeH="fit" sizeW="fit" />
          </FancyGridTemplate.GridItem>
        </FancyGridTemplate>
      </DesignArea>
    </DesignWrapper>
  );
}
