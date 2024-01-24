import { TBreakPoints } from '@/types/TBreakPoints';
import { TFancySkeletonGrid } from '@/components/templates/FancySkeletonGrid';

// ---------- This generates the set for the object or array ------- //
type TgnerateGridSet = {
  gridAreas: TFancySkeletonGrid['gridAreas'];
  gridAreasBreakPoints: TFancySkeletonGrid['gridAreasBreakPoints'];
  activeBreakPoint: TBreakPoints;
};

export const generateGridSet = (props: TgnerateGridSet) => {
  const { gridAreas, gridAreasBreakPoints, activeBreakPoint } = props;
  const set = new Set<string>();

  const addToSet = (areaSet: string[]) => {
    areaSet?.forEach((area) => {
      area.split(' ').forEach((item) => {
        set.add(item);
      });
    });
  };

  // gridAreas is an array of strings
  if (gridAreas) addToSet(gridAreas);

  // gridAreas is an object with breakpoints
  if (gridAreasBreakPoints) {
    const value = gridAreasBreakPoints[activeBreakPoint];

    addToSet(value!);
  }

  return set;
};
