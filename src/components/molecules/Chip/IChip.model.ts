import { CSSProp } from 'styled-components';

import { sizes } from '@/components/molecules/FancyContent/utils/sizeSettings';

export interface IChipProps {
  size?: keyof typeof sizes;
  isActive?: boolean;
  onClick?: () => void;
  externalStyle?: CSSProp;
  children?: React.ReactNode;
}
