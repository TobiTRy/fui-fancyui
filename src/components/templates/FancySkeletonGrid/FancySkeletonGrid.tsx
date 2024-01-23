import { SkeletonBox } from '@/components/atoms/SkeletonBox';
import { FancyGridTemplate } from '@/components/templates/FancyGridTemplate';
import { TFancySkeletonGrid } from '@/components/templates/FancySkeletonGrid/TFancySkeletonGrid.model';

// --------------------------------------------------------------------------- //
// -------- The Component generates Skeletonboxes based on the GridArea ------ //
// --------------------------------------------------------------------------- //
export default function FancySkeletonGrid(props: TFancySkeletonGrid) {
  const { gridAreas, layer, themeType, borderRadius, ...gridProps } = props;
  const set = new Set<string>();

  gridAreas.forEach((area) => {
    area.split(' ').forEach((item) => {
      set.add(item);
    });
  });

  return (
    <FancyGridTemplate gridAreas={gridAreas} {...gridProps}>
      {[...set].map((item, i) => (
        <FancyGridTemplate.GridItem key={i} gridArea={item}>
          <SkeletonBox sizeH="fit" sizeW="fit" borderRadius={borderRadius} themeType={themeType} layer={layer} />
        </FancyGridTemplate.GridItem>
      ))}
    </FancyGridTemplate>
  );
}
