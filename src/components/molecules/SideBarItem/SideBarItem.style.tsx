import { FancyBox } from '@/components/atoms/FancyBox';
import { arrayToCssValues } from '@/design/designFunctions/arrayToCssValues';
import { TSideBarItem } from './TSideBarItem.model';
import { sizeSettings } from './sizeSettings';
import { styled } from 'styled-components';

export const StyledSideBarItem = styled(FancyBox)<{ $sizeC: TSideBarItem['sizeC']; $noMargin: boolean }>`
  position: relative;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
  margin: ${({ $sizeC, $noMargin }) =>
    !$noMargin && arrayToCssValues(sizeSettings[$sizeC ?? 'sm'].wrapperMargin, 'spacing')};
`;
