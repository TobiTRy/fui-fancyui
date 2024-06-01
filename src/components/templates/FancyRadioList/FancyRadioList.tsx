import React, { useState } from 'react';

import { Fieldset } from '@/components/molecules/Fieldset';
import { FancyListBox } from '@/components/organisms/FancyListBox';
import { FancyRadio } from '@/components/organisms/FancyRadio';
import { TFancyRadioList } from './TFancyRadioList.model';
import { FancyFlexBox } from '@/components/templates/FancyFlexBox';

// --------------------------------------------------------------------------- //
// ------- The FancyRadioList renders a List of RadioButtons dynamicly ------- //
// --------------------------------------------------------------------------- //
export default function FancyRadioList(props: TFancyRadioList) {
  const { items, name, handler, themeType, layer, ...fieldSetProps } = props;
  const [currentItem, setCurrentSelect] = useState('1');

  // Define the function to handle the selection of a tab
  const radioChangeHandler = (position: string) => {
    const currentItem = items.find((item) => item.itemKey === position);
    setCurrentSelect(position);
    handler?.(currentItem?.itemKey!);
  };

  return (
    // Give the list with the Fieldset a label
    <Fieldset {...fieldSetProps} tabIndex={0}>
      {/* The ListBox gives the style */}
      <FancyListBox role="radiogroup" themeType={themeType} layer={layer} sizeC="sm">
        {items.map((item, index) => (
          <FancyFlexBox key={index} justify="flex-start">
            {/* Render the Radio with a Label and Description */}
            <FancyRadio
              name={name}
              id={item.itemKey}
              value={item.title}
              label={item.title}
              description={item.description}
              checked={currentItem === item.itemKey}
              onChange={() => radioChangeHandler(item.itemKey)}
              externalStyle={{ width: '100%' }}
            />
          </FancyFlexBox>
        ))}
      </FancyListBox>
    </Fieldset>
  );
}
