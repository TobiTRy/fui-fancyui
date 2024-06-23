import { TGridAreasBreakpoints } from '@/components/templates/FancyGridTemplate/TFancyGridTemplate.model';
import { TFancySkeletonGrid } from '@/components/templates/FancySkeletonGrid';

// ---------- This generates the set for the object or array ------- //
type TgnerateGridSet<BreakPointName extends keyof TGridAreasBreakpoints & string> = {
  gridAreas: TFancySkeletonGrid['gridAreas'];
  gridAreasBreakPoints: TFancySkeletonGrid['gridAreasBreakPoints'];
  activeBreakPoint: BreakPointName | null;
};

export const generateGridSet = (props: TgnerateGridSet<keyof TGridAreasBreakpoints & string>) => {
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
  if (gridAreasBreakPoints && activeBreakPoint) {
    const value = gridAreasBreakPoints[activeBreakPoint];

    addToSet(value);
  }

  return set;
};
