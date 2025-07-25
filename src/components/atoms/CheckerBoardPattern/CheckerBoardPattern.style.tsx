import { styled } from 'styled-components';
import { TStyledPrefixAndPicker } from '@/types/TStyledPrefixAndPicker';
import { TCheckerBoardPattern } from './TCheckerBoardPattern.model';

type TStyledCheckerBoardPattern = TStyledPrefixAndPicker<TCheckerBoardPattern>;
export const StyledCheckerBoardPattern = styled.span<TStyledCheckerBoardPattern>`
  height: 100%;
  width: 100%;
  background-image: linear-gradient(45deg, #808080 25%, transparent 25%),
    linear-gradient(-45deg, #808080 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #808080 75%),
    linear-gradient(-45deg, transparent 75%, #808080 75%);
  background-size: 14px 14px;
  background-position:
    0 0,
    0 7px,
    7px -7px,
    -7px 0px;
  opacity: ${({ $opacity }) => $opacity || 0.05};
  ${({ $externalStyle }) => $externalStyle}
`;
