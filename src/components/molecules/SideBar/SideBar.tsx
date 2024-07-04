import { InnerContainer, StyledSideBar } from './SideBar.style';
import { TSideBarWithAllAttrs } from './TSideBar.model';
import { sizeSettings } from './sizeSettings';

export default function SideBar(props: TSideBarWithAllAttrs) {
  const {
    sizeC = 'sm',
    isOpen,
    borderRadius,
    layer = 2,
    openWidth,
    children,
    gapBetweenItems,
    ...FancyBoxAttrs
  } = props;

  return (
    <StyledSideBar
      $isOpen={isOpen}
      $sizeC={sizeC}
      $openWidth={openWidth}
      borderRadius={borderRadius ?? sizeSettings[sizeC].borderRadius}
      layer={layer}
      {...FancyBoxAttrs}
    >
      <InnerContainer $gapBetweenItems={gapBetweenItems} $sizeC={sizeC}>
        {children}
      </InnerContainer>
    </StyledSideBar>
  );
}
