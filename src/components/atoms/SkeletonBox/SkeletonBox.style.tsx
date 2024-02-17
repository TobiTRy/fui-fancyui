import { styled, keyframes } from 'styled-components';

import { TTheme } from '@/types/TTheme';
import { TStyledPrefixAndPicker } from '@/types/TStyledPrefixAndPicker';
import { globalElementsizes } from '@/design/theme/globalSizes';
import { TSkeletonBox } from './TSkeleton.model';
import { clampLayer } from '@/utils/functions/clampLayer';

type TLoadingProps = TStyledPrefixAndPicker<TSkeletonBox, 'themeType' | 'layer'>;
const createLoadingKeyframes = ({
  $themeType = 'primary',
  theme,
  $layer,
}: TLoadingProps & { theme: TTheme }) => keyframes`
  0% {
    background-color: ${theme.colors[$themeType][$layer ?? 0]};
  }
  50% {
    background-color: ${theme.colors[$themeType][$layer ? clampLayer($layer + 1) : 1]};
  }
  100% {
    background-color: ${theme.colors[$themeType][$layer ?? 0]};
  }
`;

type TSyledSkeletonBox = TStyledPrefixAndPicker<TSkeletonBox>;
export const StyledSkeletonBox = styled.div<TSyledSkeletonBox & { theme: TTheme }>`
  width: ${({ $sizeW }) => ($sizeW === 'fit' ? '100%' : globalElementsizes[$sizeW || 'md'])};
  height: ${({ $sizeH }) => ($sizeH === 'fit' ? '100%' : globalElementsizes[$sizeH || 'md'])};
  background-color: ${({ theme, $themeType = 'primary', $layer }) => theme.colors[$themeType][$layer || 0]};
  animation: ${({ theme, $themeType, $layer }) => createLoadingKeyframes({ theme, $themeType, $layer })} 2s infinite;
  border-radius: ${({ theme, $borderRadius }) => theme.borderRadius[$borderRadius ?? 'xs'] || '0px'};
`;
