import { css } from 'styled-components';

import { TFancyMiniContentCardProps } from './FancyMiniContentCard';
import IStyledPrefixAndPicker from '@/interface/IStyledPrefixAndPicker';
import { themeStore } from '@/design/theme/themeStore';

type IStyledCard = IStyledPrefixAndPicker<TFancyMiniContentCardProps, 'size'>;

export const generateFancyMiniContentCardStyle = (props: IStyledCard) => {
  const getTheme = themeStore.getState().theme;
  const { $size } = props;
  console.log($size);

  return css`
    flex: 1;
    border-radius: ${getTheme.borderRadius.lg};
    border: none;

    .content {
      padding: 0 ${getTheme.spacing.md} ${getTheme.spacing.lg} ${getTheme.spacing.md};
      width: 100%;
      box-sizing: border-box;
      gap: 4px;
      display: flex;
      flex-direction: column;
    }

    .card {
      &_title {
        margin-bottom: ${getTheme.spacing.xs};
      }

      &_subtitle {
      }

      &_description {
        font-size: 0.8rem;
        font-weight: 300;
      }

      &_image {
        margin-bottom: ${getTheme.spacing.xs};
        border-radius: ${getTheme.borderRadius.lg};
      }
    }
  `;
};
