import { IChipProps } from './IChip.model';
import { css } from 'styled-components';

import { FancyPill } from '@/components/atoms/FancyPill';
import { IFancyPillProps } from '@/components/atoms/FancyPill/FancyPill.model';
import ChipDeleteButton from './Components/ChipDeleteButton/ChipDeleteButton';
import ChipImg from '@/components/molecules/Chip/Components/ChipImg/ChipImg';
import { FancyContent } from '@/components/molecules/FancyContent';
import { sizesSettings } from '@/components/molecules/Chip/sizeSettings';

// --------------------------------------------------------------------------- //
// --------------- A Simple chip you can put everthing in it  ---------------- //
// --------------------------------------------------------------------------- //
export type TChipProps = IChipProps & IFancyPillProps;
export default function Chip(props: TChipProps) {
  const { outlined, themeType, size = 'md', layer, isActive, externalStyle, children, ...htmlProps } = props;

  return (
    <FancyPill
      isActive={isActive}
      onBlur={props.onBlur}
      outlined={outlined}
      themeType={themeType}
      layer={layer}
      externalStyle={css`
        display: inline-flex;
        align-items: center;
        height: ${sizesSettings[size].height};
        ${externalStyle}
      `}
      tabIndex={0}
      {...htmlProps}
    >
      {children}
    </FancyPill>
  );
}

Chip.DeleteButton = ChipDeleteButton;
Chip.Img = ChipImg;
Chip.Content = FancyContent;
