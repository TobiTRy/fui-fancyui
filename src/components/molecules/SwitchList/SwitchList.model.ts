import { CSSProp } from 'styled-components';
import { IgenerateListItemStyle } from './SwitchList.style';
import { FancyFlexBox } from '@/components/templates/FancyFlexBox';
import { IActiveSwitchIndicator } from '@/components/atoms/SwitchActiveIndicator/SwitchActiveIndicator';

// the props for the SwitchActiveIndicator component
type TSwitchActiveIndicator = Omit<IActiveSwitchIndicator, 'itemNumber'>;

// the props for the SwitchList component
interface IBottomBarListProps {
  children?: React.ReactNode;
  whichIndexIsSelected?: number;
  activeItemHandler?: (activeKey: number) => void;
  externalStyle?: CSSProp;
}

// the props for the SwitchList component with the props for the SwitchActiveIndicator component and the FancyFlexBox component
export type TSwitchList = IBottomBarListProps &
  Omit<IgenerateListItemStyle, 'isActive'> & {
    switchIndicator?: TSwitchActiveIndicator;
    flexBoxProps?: React.ComponentProps<typeof FancyFlexBox>;
  };
