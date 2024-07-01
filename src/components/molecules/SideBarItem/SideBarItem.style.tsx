import { FancyBox } from '@/components/atoms/FancyBox';
import { TLayer } from '@/types/TLayer';

import { styled } from 'styled-components';

export type TStyledSideBarItem = {
  $hoverLayer?: TLayer;
};

export const StyledSideBarItem = styled(FancyBox)`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
`;
