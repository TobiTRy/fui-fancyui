import { StyledCheckerBoardPattern } from './CheckerBoardPattern.style';
import { TCheckerBoardPattern } from './TCheckerBoardPattern.model';

// --------------------------------------------------------------------------- //
// ----------------- displays only a simple CheckerBoardPattern -------------- //
// --------------------------------------------------------------------------- //
export default function CheckerBoardPattern(props: TCheckerBoardPattern) {
  const { opacity, color = '#808080', externalStyle } = props;

  return <StyledCheckerBoardPattern $opacity={opacity} $color={color} $externalStyle={externalStyle} />;
}
