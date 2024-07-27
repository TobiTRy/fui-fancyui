'use client';

import DynamicElementWrapper from '@/components/atoms/DynamicElementWrapper/DynamicElementWrapper';
import { ChipContainer, StyledChipList } from './ChipList.style';
import { TChipListWithHTMLAtrrs } from './TChipList.model';

// --------------------------------------------------------------------------- //
// ---------- The Chiplist is a wrapper for the chips to list them  ---------- //
// --------------------------------------------------------------------------- //
export default function ChipList(props: TChipListWithHTMLAtrrs) {
  const {
    themeType = 'primary',
    layer = 2,
    outlined = false,
    children,
    sizeC = 'md',
    borderRadius,
    systemMessage,
    ...htmlDivAttrs
  } = props;

  return (
    <DynamicElementWrapper {...htmlDivAttrs}>
      <StyledChipList
        sizeC={sizeC}
        borderRadius={borderRadius}
        themeType={themeType}
        layer={layer}
        outlined={outlined}
        $sytemMessage={systemMessage}
      >
        <ChipContainer>{children}</ChipContainer>
      </StyledChipList>
    </DynamicElementWrapper>
  );
}
