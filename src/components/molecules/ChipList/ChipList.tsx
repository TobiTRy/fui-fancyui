import { ChipContainer, StyledChipList } from './ChipList.style';
import { TChipList } from './TChipList.model';

// --------------------------------------------------------------------------- //
// ---------- The Chiplist is a wrapper for the chips to list them  ---------- //
// --------------------------------------------------------------------------- //
export default function ChipList(props: TChipList) {
  const { themeType = 'primary', layer = 2, outlined = false, children, sizeC, borderRadius, systemMessage } = props;

  //const generatedStyle = generateChipListStyle(sizeC ?? 'md', systemMessage);

  return (
    <StyledChipList
      sizeC={sizeC}
      borderRadius={borderRadius}
      themeType={themeType}
      layer={layer}
      outlined={outlined}
      sytemMessage={systemMessage}
    >
      <ChipContainer>{children}</ChipContainer>
    </StyledChipList>
  );
}
