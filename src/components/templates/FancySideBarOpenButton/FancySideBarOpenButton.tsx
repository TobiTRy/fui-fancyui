'use client';

import { SVGDoubleChevronLeft } from '@/components/icons/SVGDoubleChevronLeft/SVGDoubleChevronLeft';
import { SVGDoubleChevronRight } from '@/components/icons/SVGDoubleChevronRight/SVGDoubleChevronRight';
import { SideBarItem } from '@/components/molecules/SideBarItem';
import { TFancySideBarOpenButton } from '@/components/templates/FancySideBarOpenButton/TFancySideBarOpenButton.model';

// --------------------------------------------------------------------------- //
// ------- The FancySideBarOpenButton is template of the SideBarItem --------- //
// ------- wich indicates if a modal open and closing button         --------- //
// --------------------------------------------------------------------------- //
export default function FancySideBarOpenButton(props: TFancySideBarOpenButton) {
  const { isOpen, hoverLayer, arrowDirectionClosed = 'left', sizeC = 'sm', ...SideBarItemProps } = props;

  return (
    <SideBarItem sizeC={sizeC} hoverLayer={hoverLayer ?? 4} {...SideBarItemProps}>
      <SideBarItem.Icon sizeC={sizeC}>
        {arrowDirectionClosed === 'left' && (isOpen ? <SVGDoubleChevronLeft /> : <SVGDoubleChevronRight />)}
        {arrowDirectionClosed === 'right' && (isOpen ? <SVGDoubleChevronRight /> : <SVGDoubleChevronLeft />)}
      </SideBarItem.Icon>
    </SideBarItem>
  );
}
