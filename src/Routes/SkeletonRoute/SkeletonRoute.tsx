import { DesignArea, DesignWrapper } from '@/Routes/DesignWrapper/Wrapper';
import { SkeletonBox } from '@/components/atoms/SkeletonBox';

export default function SkeletonRoute() {
  return (
    <DesignWrapper>
      <DesignArea title="Skeleton">
        <SkeletonBox />
      </DesignArea>
    </DesignWrapper>
  );
}
