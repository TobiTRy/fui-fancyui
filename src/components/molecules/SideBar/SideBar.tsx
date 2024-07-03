import { InnerContainer, StyledSideBar } from './SideBar.style';
import { TSideBarWithAllAttrs } from './TSideBar.model';
import { sizeSettings } from './sizeSettings';

export default function SideBar(props: TSideBarWithAllAttrs) {
  const { sizeC = 'sm', isOpen, openWidth, children } = props;

  return (
    <StyledSideBar
      $isOpen={isOpen}
      $sizeC={sizeC}
      $openWidth={openWidth}
      borderRadius={sizeSettings[sizeC].borderRadius}
      layer={2}
    >
      <InnerContainer $sizeC={sizeC}>{children}</InnerContainer>
    </StyledSideBar>
  );
}
