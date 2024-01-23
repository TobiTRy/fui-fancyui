import React from 'react';
import { FancyGridTemplate, TFancyGridTemplate } from '@/components/templates/FancyGridTemplate';
import { SkeletonBox, TSkeletonBox } from '@/components/atoms/SkeletonBox';

type TFancySkeletonGrid = Omit<TFancyGridTemplate, 'children'> & Omit<TSkeletonBox, 'aspectRatio'>;

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
