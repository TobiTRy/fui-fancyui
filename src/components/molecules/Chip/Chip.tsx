'use client';

import { StyledChip } from '@/components/molecules/Chip/Chip.style';
import { FancyContent } from '@/components/molecules/FancyContent';

import ChipImg from '@/components/molecules/Chip/Components/ChipImg/ChipImg';
import ChipDeleteButton from './Components/ChipDeleteButton/ChipDeleteButton';

import { TChipWithFancyPillAttrs } from './TChip.model';

// --------------------------------------------------------------------------- //
// --------------- A Simple chip you can put everthing in it  ---------------- //
// --------------------------------------------------------------------------- //
function Chip(props: TChipWithFancyPillAttrs) {
  const { outlined, themeType, sizeC = 'md', layer, isActive, externalStyle, children, ...htmlProps } = props;

  return (
    <StyledChip
      isActive={isActive}
      onBlur={props.onBlur}
      outlined={outlined}
      themeType={themeType}
      layer={layer}
      tabIndex={0}
      $sizeC={sizeC}
      externalStyle={externalStyle}
      {...htmlProps}
    >
      {children}
    </StyledChip>
  );
}

Chip.DeleteButton = ChipDeleteButton;
Chip.Img = ChipImg;
Chip.Content = FancyContent;

// Is needed for the storybook to work
export default Chip;
