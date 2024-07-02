import { TSideBarItem } from '@/components/molecules/SideBarItem';
import SideBarItem from '@/components/molecules/SideBarItem/SideBarItem';

type TFancySideBarItem = {
  icon: React.ReactNode;
  label: string;
} & TSideBarItem;

export default function FancySideBarItem(props: TFancySideBarItem) {
  const { icon, label, ...sideBarItemProps } = props;

  return (
    <SideBarItem {...sideBarItemProps}>
      <SideBarItem.Icon sizeC="xs">{icon}</SideBarItem.Icon>
      <SideBarItem.Label>{label}</SideBarItem.Label>
    </SideBarItem>
  );
}
