import { styled, keyframes, css } from 'styled-components';

import { TTheme } from '@/types/TTheme';
import { TStyledPrefixAndPicker } from '@/types/TStyledPrefixAndPicker';
import { globalElementSizes } from '@/design/theme/globalSizes';
import { TSkeletonBox } from './TSkeleton.model';
import { clampLayer } from '@/utils/functions/clampLayer';

type TSyledSkeletonBox = TStyledPrefixAndPicker<TSkeletonBox>;
export const StyledSkeletonBox = styled.div<TSyledSkeletonBox & { theme: TTheme }>`
  width: ${({ $sizeW }) => $sizeW && ($sizeW === 'fit' ? '100%' : globalElementSizes[$sizeW])};
  height: ${({ $sizeH }) => $sizeH && ($sizeH === 'fit' ? '100%' : globalElementSizes[$sizeH])};
  background-color: ${({ theme, $themeType = 'primary', $layer }) => theme.color[$themeType][$layer || 0]};
  animation: ${({ theme, $themeType, $layer }) => createLoadingKeyframes({ theme, $themeType, $layer })} 2s infinite;
  animation-delay: ${({ $index = 0 }) => $index * 0.1}s;
  border-radius: ${({ theme, $borderRadius }) => theme.borderRadius[$borderRadius ?? 'xs'] || '0px'};
  overflow: hidden;
  position: relative;
  ${({ $aspectRatio }) =>
    $aspectRatio &&
    css`
      aspect-ratio: ${$aspectRatio};
    `}

  ${({ $externalStyle }) => $externalStyle};
`;

type TLoadingProps = TStyledPrefixAndPicker<TSkeletonBox, 'themeType' | 'layer'>;
const createLoadingKeyframes = ({
  $themeType = 'primary',
  theme,
  $layer,
}: TLoadingProps & { theme: TTheme }) => keyframes`
  0% {
    background-color: ${theme.color[$themeType][$layer ?? 0]};
  }
  50% {
    background-color: ${theme.color[$themeType][$layer ? clampLayer($layer + 1) : 1]};
  }
  100% {
    background-color: ${theme.color[$themeType][$layer ?? 0]};
  }
`;
