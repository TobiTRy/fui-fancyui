import { styled } from 'styled-components';

import { StyledFancyGridTemplate } from '@/components/templates/FancyGridTemplate/FancyGridTemplate.style';
import { FancyGridTemplateProps, GridAreaItemProps } from './TFancyGridTemplate.model';

// --------------------------------------------------------------------------- //
// ------------ The FancyGridTemplate Component to define the grid ---------- //
// --------------------------------------------------------------------------- //
function FancyGridTemplate(props: FancyGridTemplateProps) {
  const { gridAreas, gapColumn, gapRow, height, width, children } = props;
  return (
    <StyledFancyGridTemplate
      $gridAreas={gridAreas}
      $gapColumn={gapColumn}
      $gapRow={gapRow}
      $height={height}
      $width={width}
    >
      {children}
    </StyledFancyGridTemplate>
  );
}

// --------------------------------------------------------------------------- //
// -------- The GridItem Component to fill the grid with the postion --------- //
// --------------------------------------------------------------------------- //
const GridItem = styled.div<GridAreaItemProps>`
  grid-area: ${(props) => props.gridArea};
`;

FancyGridTemplate.GridItem = GridItem;

export default FancyGridTemplate;
