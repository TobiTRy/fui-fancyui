import { ComponentProps } from 'react';

import { FancyBox } from '@/components/atoms/FancyBox';
import { FancyItemContent } from '@/components/molecules/FancyItemContent';
import { TFancyItemContentWithHTMLProps } from '@/components/molecules/FancyItemContent/TFancyItemContent.model';
import { TUiColorsMain } from '@/types/TUiColorsMain';
import { flipThemeType } from '@/design/designFunctions/flipThemeType';

type TFancySearchBarItemProps = {
  item: TFancyItemContentWithHTMLProps['item'];
  itemLayoutMode?: TFancyItemContentWithHTMLProps['layoutMode'];
  themeType: TUiColorsMain;
} & Omit<ComponentProps<typeof FancyBox>, 'themeType'>;

export default function FancySearchSelectItem(props: TFancySearchBarItemProps) {
  const { item, layer = 2, hoverLayer = 3, itemLayoutMode, themeType, ...boxProps } = props;

  return (
    <FancyBox layer={layer} hoverLayer={hoverLayer} padding={'xs'} outlined={false} themeType={themeType} {...boxProps}>
      <FancyItemContent
        item={item}
        themeType={flipThemeType(themeType)}
        layoutMode={itemLayoutMode}
        gapBetweenIcon="sm"
        imageSize="sm"
        iconSize="sm"
        imageBorderRadius="xs"
        iconNoPadding={false}
      />
    </FancyBox>
  );
}
