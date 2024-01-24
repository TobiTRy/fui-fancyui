import { SkeletonBox } from '@/components/atoms/SkeletonBox';
import { FancyGridTemplate } from '@/components/templates/FancyGridTemplate';
import { TFancySkeletonGrid } from '@/components/templates/FancySkeletonGrid/TFancySkeletonGrid.model';
import { TBreakPoints } from 'lib';

// --------------------------------------------------------------------------- //
// -------- The Component generates Skeletonboxes based on the GridArea ------ //
// --------------------------------------------------------------------------- //
export default function FancySkeletonGrid(props: TFancySkeletonGrid) {
  const { gridAreas, layer, themeType, borderRadius, ...gridProps } = props;

  // Generate a set of grid areas
  const set = generateGridSet(gridAreas);

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

// ---------- This generates the set for the object or array ------- //
const generateGridSet = (gridAreas: TFancySkeletonGrid['gridAreas']) => {
  const set = new Set<string>();

  // gridAreas is an array of strings
  if (Array.isArray(gridAreas)) {
    gridAreas.forEach((area) => {
      area.split(' ').forEach((item) => {
        set.add(item);
      });
    });

    return set;
  }

  // gridAreas is an object with breakpoints
  Object.keys(gridAreas).forEach((key) => {
    const value = gridAreas[key as TBreakPoints];

    value?.forEach((area) => {
      area.split(' ').forEach((item) => {
        set.add(item);
      });
    });
  });

  return set;
};
