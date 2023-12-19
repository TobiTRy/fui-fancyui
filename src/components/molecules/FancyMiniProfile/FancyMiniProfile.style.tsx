import { css, styled } from 'styled-components';

import { TTheme } from '@/interface/TTheme';

import { Chip } from '@/components/molecules/Chip';
import { TChipProps } from '@/components/molecules/Chip/Chip';
import { sizeSettings } from '@/components/molecules/FancyMiniProfile/sizeSettings';

type TStyledChip = TChipProps & { theme: TTheme; $alignedImage?: 'left' | 'right' };
export const StyledChip = styled(Chip)<TStyledChip>`
  flex-direction: ${({ $alignedImage }) => ($alignedImage === 'right' ? 'row-reverse' : 'row')};
  gap: ${({ theme, size }) => theme.spacing[sizeSettings[size || 'sm'].gap]};

  ${({ $alignedImage, size, theme }) =>
    $alignedImage === 'left'
      ? css`
          padding-right: ${theme.spacing[sizeSettings[size || 'sm'].paddingToEdge]};
        `
      : css`
          padding-left: ${theme.spacing[sizeSettings[size || 'sm'].paddingToEdge]};
        `};

  .miniprofile {
    &_content {
      height: 100%;
      align-items: ${({ $alignedImage }) => ($alignedImage === 'right' ? 'flex-end' : 'flex-start')};

      .content {
        span {
          line-height: 1.1;
        }
      }
    }
  }
`;
