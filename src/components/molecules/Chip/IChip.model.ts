import { CSSProp } from 'styled-components';

import { sizes } from '@/components/molecules/FancyContent/utils/sizeSettings';
import { sizesSettings } from '@/components/molecules/Chip/sizeSettings';

export interface IChipProps {
  size?: keyof typeof sizesSettings;
  isActive?: boolean;
  externalStyle?: CSSProp;
  children?: React.ReactNode;
}
