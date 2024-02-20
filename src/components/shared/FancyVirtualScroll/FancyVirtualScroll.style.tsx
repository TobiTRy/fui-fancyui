import { CSSProp, styled } from 'styled-components';
import { TVirtualScrollProps } from './TVirtualScroll.model';
import { TStyledPrefixAndPicker } from '@/types/TStyledPrefixAndPicker';

type TWrapper = TStyledPrefixAndPicker<TVirtualScrollProps, 'containerHeight' | 'scrollSnap'> & {
  $externalStyle?: CSSProp;
  $scrollBehaviorOn?: boolean;
};

export const Wrapper = styled.div<TWrapper>`
  height: ${({ $containerHeight }) => $containerHeight};
  scroll-snap-type: ${({ $scrollSnap }) => ($scrollSnap ? `y ${$scrollSnap}` : 'none')};
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 4px;
    overflow: hidden;
  }
  ${({ $externalStyle }) => $externalStyle};
`;

type TItem = {
  $itemHeight: string;
  $enableScrollSnap: boolean;
  $externalStyle?: CSSProp;
};
export const Item = styled.div<TItem>`
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  overflow: hidden;
  height: ${({ $itemHeight }) => $itemHeight};
  scroll-snap-align: ${({ $enableScrollSnap }) => ($enableScrollSnap ? 'start' : 'none')};
  ${({ $externalStyle }) => $externalStyle};
`;
