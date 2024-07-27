'use client';

import { StyledSkeletonBox } from '@/components/atoms/SkeletonBox/SkeletonBox.style';
import { TSkeletonBoxWithHTMLAttrs } from '@/components/atoms/SkeletonBox/TSkeleton.model';
import { isAspectRatioValid } from '@/utils/validations/isAspectRatioValid';

export default function SkeletonBox(props: TSkeletonBoxWithHTMLAttrs) {
  const {
    themeType = 'primary',
    layer = 0,
    sizeH = 'fit',
    sizeW = 'fit',
    aspectRatio,
    borderRadius,
    externalStyle,
    ...htmlProps
  } = props;

  if (aspectRatio) isAspectRatioValid(aspectRatio);

  return (
    <StyledSkeletonBox
      $themeType={themeType}
      $sizeH={sizeH}
      $sizeW={sizeW}
      $layer={layer}
      $aspectRatio={aspectRatio}
      $borderRadius={borderRadius}
      $externalStyle={externalStyle}
      {...htmlProps}
    />
  );
}
