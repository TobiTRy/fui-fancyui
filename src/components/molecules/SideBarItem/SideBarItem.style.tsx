import { FancyBox } from '@/components/atoms/FancyBox';
import { arrayToCssValues } from '@/design/designFunctions/arrayToCssValues';
import { TLayer } from '@/types/TLayer';
import { TTheme } from '@/types/TTheme';
import { TSideBarItem } from './TSideBarItem.model';
import { sizeSettings } from './sizeSettings';

import { styled } from 'styled-components';

export type TStyledSideBarItem = {
  $hoverLayer?: TLayer;
};

export const StyledSideBarItem = styled(FancyBox)`
  position: relative;
  width: 100%;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
`;

export const Wrapper = styled.div<{ theme: TTheme; $sizeC: TSideBarItem['sizeC'] }>`
  margin: ${({ $sizeC }) => arrayToCssValues(sizeSettings[$sizeC ?? 'sm'].wrapperMargin, 'spacing')};
`;
