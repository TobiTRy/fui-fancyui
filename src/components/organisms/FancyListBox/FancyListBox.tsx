import React from 'react';

import { FancyLine } from '@/components/atoms/FancyLine';
import { ListBox } from '@/components/molecules/ListBox';
import { clampLayer } from '@/utils/functions/clampLayer';
import { TFancyListBox } from './TFancyListBox.model';

export default function FancyListBox(props: TFancyListBox) {
  const { children, size = 'md', seperator = {}, layer, themeType = 'primary', borderRadius, ...listProps } = props;

  const items = React.Children.toArray(children);

  return (
    <ListBox themeType={themeType} size={size} borderRadius={borderRadius} {...listProps}>
      {items.map((child, index) => {
        if (React.isValidElement(child)) {
          return (
            <React.Fragment key={index}>
              <ListBox.Item size={size}>{child}</ListBox.Item>
              {/* The Seperator for each item */}
              {seperator && items.length - 1 !== index && (
                <FancyLine themeType={themeType} layer={clampLayer(layer ? layer + 2 : 3)} {...seperator} />
              )}
            </React.Fragment>
          );
        }
      })}
    </ListBox>
  );
}
