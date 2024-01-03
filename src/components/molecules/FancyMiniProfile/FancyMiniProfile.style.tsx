import { css } from 'styled-components';

import { TChipProps } from '@/components/molecules/Chip/Chip';
import { sizeSettings } from '@/components/molecules/FancyMiniProfile/sizeSettings';
import { themeStore } from '@/design/theme/themeStore';

type TStyledChip = TChipProps & { $alignImage?: 'left' | 'right' };

export const generateChipStyle = (props: TStyledChip) => {
  const { $alignImage, size } = props;

  const theme = themeStore.getState().theme;

  return css`
    flex-direction: ${$alignImage === 'right' ? 'row-reverse' : 'row'};
    gap: ${theme.spacing[sizeSettings[size || 'sm'].gap]};

    ${$alignImage === 'left'
      ? css`
          padding-right: ${theme.spacing[sizeSettings[size || 'sm'].paddingToEdge]};
        `
      : css`
          padding-left: ${theme.spacing[sizeSettings[size || 'sm'].paddingToEdge]};
        `};

    .miniprofile {
      &_content {
        height: 100%;
        align-items: ${$alignImage === 'right' ? 'flex-end' : 'flex-start'};

        .content {
          span {
            line-height: 1.1;
          }
        }
      }
    }
  `;
};
