import { SVGDoubleChevronLeft } from '@/components/icons/SVGDoubleChevronLeft/SVGDoubleChevronLeft';
import { SVGDoubleChevronRight } from '@/components/icons/SVGDoubleChevronRight/SVGDoubleChevronRight';
import { SideBarItem, TSideBarItem } from '@/components/molecules/SideBarItem';
import { TTextAlignLR } from '@/types/TTextAlignLR';

type TFancySideBarOpenButton = Omit<TSideBarItem, 'children'> & {
  isOpen?: boolean;
  arrowDirectionClosed: TTextAlignLR;
};

export default function FancySideBarOpenButton(props: TFancySideBarOpenButton) {
  const { isOpen, hoverLayer, arrowDirectionClosed = 'left', ...SideBarItemProps } = props;

  return (
    <SideBarItem hoverLayer={hoverLayer ?? 4} {...SideBarItemProps}>
      <SideBarItem.Icon sizeC={props.sizeC}>
        {arrowDirectionClosed === 'left' && (isOpen ? <SVGDoubleChevronLeft /> : <SVGDoubleChevronRight />)}
        {arrowDirectionClosed === 'right' && (isOpen ? <SVGDoubleChevronRight /> : <SVGDoubleChevronLeft />)}
      </SideBarItem.Icon>
    </SideBarItem>
  );
}
