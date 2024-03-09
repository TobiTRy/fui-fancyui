import { IFancyPillProps } from '@/components/atoms/FancyPill/TFancyPill.model';
import { FancyContent } from '@/components/molecules/FancyContent';
import { StyledChip } from '@/components/molecules/Chip/Chip.style';

import ChipDeleteButton from './Components/ChipDeleteButton/ChipDeleteButton';
import ChipImg from '@/components/molecules/Chip/Components/ChipImg/ChipImg';
import { TComponentSizes } from '@/types/TComponentSizes';

// --------------------------------------------------------------------------- //
// --------------- A Simple chip you can put everthing in it  ---------------- //
// --------------------------------------------------------------------------- //
export type TChipProps = IFancyPillProps & { sizeC?: TComponentSizes };
function Chip(props: TChipProps) {
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
