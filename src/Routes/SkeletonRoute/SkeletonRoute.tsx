import { DesignArea, DesignWrapper } from '@/Routes/DesignWrapper/Wrapper';
import FancySkeletonGrid from '@/components/templates/FancySkeletonGrid/FancySkeletonGrid';

export default function SkeletonRoute() {
  return (
    <DesignWrapper>
      <DesignArea title="Skeleton">
        <FancySkeletonGrid
          gridAreas={['a a b b b b d', 'a a c c c c d', 'e e c c c c f', 'e e g g g g f', 'e e h h h h f']}
          height="200px"
        />
      </DesignArea>
    </DesignWrapper>
  );
}
