import { DesignArea, DesignWrapper } from '@/Routes/DesignWrapper/Wrapper';
import { SkeletonBox } from '@/components/atoms/SkeletonBox';
import FancySkeletonGrid from '@/components/templates/FancySkeletonGrid/FancySkeletonGrid';

export default function SkeletonRoute() {
  return (
    <DesignWrapper>
      <DesignArea title="Skeleton">
        {/* <FancySkeletonGrid
          gridAreas={['a a b b b b d', 'a a c c c c d', 'e e c c c c f', 'e e g g g g f', 'e e h h h h f']}
          height="200px"
        /> */}
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
        {[...Array(5)].map((_, index) => (
          <SkeletonBox key={index} index={index} sizeH="md" sizeW="fit" borderRadius="md" />
        ))}

        <FancySkeletonGrid
          gridAreas={['a a b b b b b', 'a a c c c c d', 'e e c c c c f', 'e e g g g g f', 'e e h h h h f']}
          gridAreasBreakPoints={{
            sm: ['a a b b b j j', 'a a c c c c d', 'e e c c c c f', 'e e g g g g f', 'e e h h h h f'],
            md: ['a a b b b j j', 'a a c c c c d', 'e e c c c c f', 'e e g g g g f', 'e e h h h h f'],
            lg: ['a a b b b j j', 'a a c c c c d', 'e e c c c c f', 'e e g g g g f', 'e e h h h h f'],
            xl: ['a a b b b j j', 'a a c c c c d', 'e e c c c c f', 'e e g g g g f', 'e e h h h h f'],
          }}
          height="200px"
        />
      </DesignArea>
    </DesignWrapper>
  );
}
