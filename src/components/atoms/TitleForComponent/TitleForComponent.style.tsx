import { styled } from 'styled-components';
import { TTextAlignLC } from '@/types/TTextAlignLC';

export const TitleWrapper = styled.div<{ $align?: TTextAlignLC }>`
  text-align: ${({ $align }) => $align ?? 'left'};
`;
