import { InnerContainer, StyledSideBar } from './SideBar.style';
import { TSideBarWithAllAttrs } from './TSideBar.model';

export default function SideBar(props: TSideBarWithAllAttrs) {
  const { isOpen, openWidth, children } = props;

  return (
    <StyledSideBar $isOpen={isOpen} $openWidth={openWidth} layer={3} borderRadius={'md'}>
      <InnerContainer>{children}</InnerContainer>
    </StyledSideBar>
  );
}
