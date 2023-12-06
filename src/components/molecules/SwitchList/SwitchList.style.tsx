import { styled, CSSProp } from 'styled-components';

import { RawUL } from '@/components/atoms/RawUL';

export const StyledList = styled(RawUL)<{ $externalStyle?: CSSProp; $direction?: 'horizontal' | 'vertical' }>`
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
