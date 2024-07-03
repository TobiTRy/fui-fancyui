import { SVGDoubleChevronLeft } from '@/components/icons/SVGDoubleChevronLeft/SVGDoubleChevronLeft';
import { SVGDoubleChevronRight } from '@/components/icons/SVGDoubleChevronRight/SVGDoubleChevronRight';
import { SideBarItem, TSideBarItem } from '@/components/molecules/SideBarItem';

export default function FancySideBarOpenButton(props: Omit<TSideBarItem, 'children'> & { isOpen?: boolean }) {
  const { isOpen, hoverLayer, ...SideBarItemProps } = props;

  return (
    <SideBarItem hoverLayer={hoverLayer ?? 4} {...SideBarItemProps}>
      <SideBarItem.Icon sizeC={props.sizeC}>
        {isOpen ? <SVGDoubleChevronLeft /> : <SVGDoubleChevronRight />}
      </SideBarItem.Icon>
    </SideBarItem>
  );
}
