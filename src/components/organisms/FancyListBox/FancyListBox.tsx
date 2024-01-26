import React from 'react';

import { TFancyListBox } from './TFancyListBox.model';
import { FancyLine } from '@/components/atoms/FancyLine';
import { ListBox } from '@/components/molecules/ListBox';
import { clampLayer } from '@/utils/functions/clampLayer';
import TitleForComponent from '@/components/atoms/TitleForComponent/TitleForComponent';

// --------------------------------------------------------------------------- //
// ---------- This component renders a list with the provided items ---------- //
// --------------------------------------------------------------------------- //
export default function FancyListBox(props: TFancyListBox) {
  const {
    children,
    size = 'md',
    seperator = {},
    layer,
    themeType = 'primary',
    borderRadius,
    title,
    ...listProps
  } = props;

  const items = React.Children.toArray(children);

  // generate this List component with the provided settings
  const ListComponent = (
    <ListBox themeType={themeType} layer={layer} size={size} borderRadius={borderRadius} {...listProps}>
      {/* Render the childs with the settings */}
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

  // if a title is provided, render the title component
  const TitleComponent = title ? (
    <TitleForComponent titleAlign={title?.titleAlign} title={title?.title}>
      {ListComponent}
    </TitleForComponent>
  ) : null;

  // return the title component + listcomponent or the list component
  return <>{title ? TitleComponent : ListComponent}</>;
}
