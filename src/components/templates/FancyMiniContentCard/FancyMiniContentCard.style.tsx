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
      width: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
    }

    .card {
      &_title {
        margin-bottom: ${getTheme.spacing.xs};
      }

      &_subtitle {
        margin: ${getTheme.spacing.xs} 0;
      }

      &_description {
      }

      &_image {
        margin-bottom: ${getTheme.spacing.xs};
        border-radius: ${getTheme.borderRadius.lg};
      }
    }
  `;
};
