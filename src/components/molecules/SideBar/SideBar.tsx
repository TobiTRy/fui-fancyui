import { InnerContainer, StyledSideBar } from './SideBar.style';
import { TSideBarWithAllAttrs } from './TSideBar.model';

export default function SideBar(props: TSideBarWithAllAttrs) {
  const { sizeC = 'sm', isOpen, openWidth, children } = props;

  return (
    <StyledSideBar $isOpen={isOpen} $sizeC={sizeC} $openWidth={openWidth} layer={2}>
      <InnerContainer>{children}</InnerContainer>
    </StyledSideBar>
  );
}
