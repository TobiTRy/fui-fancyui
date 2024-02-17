import { styled } from 'styled-components';
import { TVirtualScrollProps } from './TVirtualScroll.model';
import { TStyledPrefixAndPicker } from '@/types/TStyledPrefixAndPicker';

type TWrapper = TStyledPrefixAndPicker<TVirtualScrollProps, 'containerHeight' | 'scrollSnap'>;

export const Wrapper = styled.div<TWrapper>`
  height: ${({ $containerHeight }) => $containerHeight};
  overflow-y: scroll;
  scroll-snap-type: ${({ $scrollSnap }) => ($scrollSnap ? `y ${$scrollSnap}` : 'none')};

  &::-webkit-scrollbar {
    width: 4px;
    overflow: hidden;
  }
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
