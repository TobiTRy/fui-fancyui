import { styled } from 'styled-components';

type TWrapper = {
  $containerHeight: string;
  $enableScrollSnap: boolean;
};
export const Wrapper = styled.div<TWrapper>`
  height: ${({ $containerHeight }) => $containerHeight};
  overflow-y: scroll;
  scroll-snap-type: ${({ $enableScrollSnap }) => ($enableScrollSnap ? 'y mandatory' : 'none')};
`;

type TItem = {
  $itemHeight: string;
  $enableScrollSnap: boolean;
};
export const Item = styled.div<TItem>`
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  overflow: hidden;
  height: ${({ $itemHeight }) => $itemHeight};
  scroll-snap-align: ${({ $enableScrollSnap }) => ($enableScrollSnap ? 'start' : 'none')};
`;
