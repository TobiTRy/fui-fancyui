'use client';

import React from 'react';

import { FancyLine } from '@/components/atoms/FancyLine';
import { ListBox } from '@/components/molecules/ListBox';
import { clampLayer } from '@/utils/functions/clampLayer';
import { TitleForComponent } from '@/components/atoms/TitleForComponent';

import { TFancyListBoxWithListBoxAttrs } from './TFancyListBox.model';

// --------------------------------------------------------------------------- //
// ---------- This component renders a list with the provided items ---------- //
// --------------------------------------------------------------------------- //
export default function FancyListBox(props: TFancyListBoxWithListBoxAttrs) {
  const {
    children,
    sizeC = 'md',
    seperator = {},
    layer = 1,
    themeType = 'primary',
    borderRadius,
    boxTitle,
    itemSettings,
    ...listProps
  } = props;

  // convert the children to an array
  const items = React.Children.toArray(children);

  // generate this List component with the provided settings
  const ListComponent = (
    <ListBox themeType={themeType} layer={layer} sizeC={sizeC} borderRadius={borderRadius} {...listProps}>
      {/* Render the childs with the settings */}
      {items.map((child, index) => {
        if (React.isValidElement(child)) {
          return (
            <React.Fragment key={index}>
              <ListBox.Item sizeC={sizeC} {...itemSettings}>
                {child}
              </ListBox.Item>
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
  const TitleComponent = boxTitle ? <TitleForComponent {...boxTitle}>{ListComponent}</TitleForComponent> : null;

  // return the title component + listcomponent or the list component
  return <>{boxTitle ? TitleComponent : ListComponent}</>;
}
