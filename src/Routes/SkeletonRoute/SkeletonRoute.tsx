import { DesignArea, DesignWrapper } from '@/Routes/DesignWrapper/Wrapper';
import SkeletonBox from '@/components/atoms/SkeletonBox/SkeletonBox';
import React from 'react';

export default function SkeletonRoute() {
  return (
    <DesignWrapper>
      <DesignArea title="Skeleton">
        <SkeletonBox themeType="primary" />
      </DesignArea>
    </DesignWrapper>
  );
}
