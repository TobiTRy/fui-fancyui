import { StyledSkeletonBox } from '@/components/atoms/SkeletonBox/SkeletonBox.style';
import { TSkeletonBox } from '@/components/atoms/SkeletonBox/TSkeleton.model';
import { isAspectRatioValid } from '@/utils/validations/isAspectRatioValid';

export default function SkeletonBox(props: TSkeletonBox) {
  const { themeType, sizeH, sizeW, aspectRatio, borderRadius, layer = 0 } = props;

  if (aspectRatio) isAspectRatioValid(aspectRatio);

  return (
    <StyledSkeletonBox
      $themeType={themeType}
      $sizeH={sizeH}
      $sizeW={sizeW}
      $layer={layer}
      $aspectRatio={aspectRatio}
      $borderRadius={borderRadius}
    />
  );
}
