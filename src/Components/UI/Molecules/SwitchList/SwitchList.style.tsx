import { styled, CSSProp } from 'styled-components';
import ULRaw from '../../../Atoms/RawUL/RawUL';

export const StyledList = styled(ULRaw)<{ $externalStyle?: CSSProp; $direction?: 'horizontal' | 'vertical' }>`
  display: flex;
  flex-direction: ${({ $direction }) => ($direction === 'vertical' ? 'column' : 'row')};
  justify-content: space-evenly;
  width: 100%;
  ${({ $externalStyle }) => $externalStyle};
`;

export const ItemWrapper = styled.li`
  position: relative;
  flex-grow: 1;
`;
