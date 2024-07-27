'use client';

import { StyledFancyGridTemplate } from '@/components/templates/FancyGridTemplate/FancyGridTemplate.style';
import FancyGridTemplateItem from '@/components/templates/FancyGridTemplateItem/FancyGridTemplateItem';
import { TFancyGridTemplate } from './TFancyGridTemplate.model';
import { TDynamicElement } from '@/types/TDynamicElement';

// --------------------------------------------------------------------------- //
// ------------ The FancyGridTemplate Component to define the grid ---------- //
// --------------------------------------------------------------------------- //
function FancyGridTemplate<T extends React.ElementType = 'div'>(props: TDynamicElement<T> & TFancyGridTemplate) {
  const {
    gridAreas,
    gridAreasBreakPoints,
    gapColumn = 'sm',
    gapRow = 'sm',
    height = '100%',
    width = '100%',
    children,
    ...htmlProps
  } = props;

  // Create a function to select grid areas based on breakpoints
  return (
    <StyledFancyGridTemplate
      $gridAreasBreakPoints={gridAreasBreakPoints}
      $gridAreas={gridAreas}
      $gapColumn={gapColumn}
      $gapRow={gapRow}
      $height={height}
      $width={width}
      {...htmlProps}
    >
      {children}
    </StyledFancyGridTemplate>
  );
}

FancyGridTemplate.Item = FancyGridTemplateItem;

// export is needed after GridItem is added to FancyGridTemplate
// for Storybook to work
export default FancyGridTemplate;
