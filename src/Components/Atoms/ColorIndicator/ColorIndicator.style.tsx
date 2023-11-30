import { styled, css } from 'styled-components';

import { boxShadow } from '../../design/shadows/shadows';
import { TTheme } from '@/Components/Interface/TTheme';

export const WrapperIndicator = styled.div<{ $isActive: boolean }>`
  position: absolute;
  width: ${({ $isActive }) => ($isActive ? '70px' : '0px')};
  height: ${({ $isActive }) => ($isActive ? '70px' : '0px')};
  z-index: 10;
  left: 50%;
  transform: translate(-50%);
  transition:
    width 0.15s ease-in-out,
    height 0.15s ease-in-out;
  pointer-events: none;
`;

export const Indicator = styled.div.attrs<{ $color: string; theme: TTheme }>(({ $color }) => ({
  style: {
    backgroundColor: $color,
  },
}))<{ $isActive: boolean }>`
  border-radius: 50% 50% 50% 0;
  border: 1.5px solid ${({ theme }) => theme.colors.secondary[0]};
  background-color: ${({ theme }) => theme.colors.secondary[0]};
  ${boxShadow.sm};
  position: absolute;
  top: ${({ $isActive }) => ($isActive ? '-105px' : '-5px')};
  width: 100%;
  height: 100%;
  left: 50%;
  transform: ${({ $isActive }) =>
    $isActive ? css`translate(-50%) scale(1) rotate(-45deg)` : css`translate(-50%) scale(0) rotate(-45deg)`};
  user-select: none;
  transition:
    transform 0.15s ease-in-out,
    top 0.15s ease-in-out;
`;
