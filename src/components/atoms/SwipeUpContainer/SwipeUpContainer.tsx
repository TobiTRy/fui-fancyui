import { TSwipeUpContainer } from './SwipeUpContainer.model';
import { StyledSwipeUpContainer } from './SwipeUpContainer.style';

// --------------------------------------------------------------------------- //
// ----------- The Modal Atom the displays a simple Mobile Modal ------------- //
// --------------------------------------------------------------------------- //
export default function SwipeUpContainer(props: TSwipeUpContainer) {
  const { children, style, isScalable = false, themeType = 'primary', layer = 0 } = props;

  return (
    <StyledSwipeUpContainer
      style={isScalable ? style : { height: 'auto', ...style }}
      $giveSpace={!isScalable}
      $themeType={themeType}
      $layer={layer}
    >
      {children}
    </StyledSwipeUpContainer>
  );
}
