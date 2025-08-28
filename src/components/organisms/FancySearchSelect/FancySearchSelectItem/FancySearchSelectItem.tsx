import { ComponentProps } from 'react';

import { FancyBox } from '@/components/atoms/FancyBox';
import { FancyItemContent } from '@/components/molecules/FancyItemContent';
import { TFancyItemContentWithHTMLProps } from '@/components/molecules/FancyItemContent/TFancyItemContent.model';

type TFancySearchBarItemProps = {
  item: TFancyItemContentWithHTMLProps['item'];
  itemLayoutMode?: TFancyItemContentWithHTMLProps['layoutMode'];
} & ComponentProps<typeof FancyBox>;

export default function FancySearchSelectItem(props: TFancySearchBarItemProps) {
  const { item, layer = 2, hoverLayer = 3, itemLayoutMode, ...boxProps } = props;
  return (
    <FancyBox layer={layer} hoverLayer={hoverLayer} padding={'xs'} outlined={false} {...boxProps}>
      <FancyItemContent
        item={item}
        layoutMode={itemLayoutMode}
        gapBetweenIcon="sm"
        imageSize="sm"
        imageBorderRadius="xs"
        iconNoPadding={true}
      />
    </FancyBox>
  );
}
