import { useWichBreakPointIsActive } from '@/utils/hooks/useWichBreakPointIsActive/useWichBreakPointIsActive';

import { SkeletonBox } from '@/components/atoms/SkeletonBox';
import { FancyGridTemplate } from '@/components/templates/FancyGridTemplate';
import { TFancySkeletonGrid } from '@/components/templates/FancySkeletonGrid/TFancySkeletonGrid.model';
import { generateGridSet } from '@/components/templates/FancySkeletonGrid/utils/generateGidSet';

// --------------------------------------------------------------------------- //
// -------- The Component generates Skeletonboxes based on the GridArea ------ //
// --------------------------------------------------------------------------- //
export default function FancySkeletonGrid(props: TFancySkeletonGrid) {
  const { gridAreas, gridAreasBreakPoints, layer, themeType, borderRadius, ...gridProps } = props;
  const activeBreakPoint = useWichBreakPointIsActive();

  // Generate a set of grid areas based on the gridAreas and gridAreasBreakPoints
  const set = generateGridSet({ gridAreas, gridAreasBreakPoints, activeBreakPoint });

  return (
    <FancyGridTemplate gridAreas={gridAreas} gridAreasBreakPoints={gridAreasBreakPoints} {...gridProps}>
      {[...set].map((item, i) => (
        <FancyGridTemplate.Item key={i} gridArea={item}>
          <SkeletonBox sizeH="fit" sizeW="fit" borderRadius={borderRadius} themeType={themeType} layer={layer} />
        </FancyGridTemplate.Item>
      ))}
    </FancyGridTemplate>
  );
}
