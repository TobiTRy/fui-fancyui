import { TSideBarItem } from '@/components/molecules/SideBarItem';
import SideBarItem from '@/components/molecules/SideBarItem/SideBarItem';

type TFancySideBarItem = {
  icon: React.ReactNode;
  label: string;
} & TSideBarItem;

export default function FancySideBarItem(props: TFancySideBarItem) {
  const { icon, label, sizeC, ...sideBarItemProps } = props;

  return (
    <SideBarItem sizeC={sizeC} {...sideBarItemProps}>
      <SideBarItem.Icon sizeC={sizeC}>{icon}</SideBarItem.Icon>
      <SideBarItem.Label sizeC={sizeC}>{label}</SideBarItem.Label>
    </SideBarItem>
  );
}
