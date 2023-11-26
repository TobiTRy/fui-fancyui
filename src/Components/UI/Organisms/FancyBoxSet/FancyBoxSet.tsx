import React from 'react';

import { Fieldset } from '@/Components/UI/Molecules/Fieldset';
import { FancyListBox } from '@/Components/UI/Molecules/FancyListBox';
import { FancyLine } from '@/Components/UI/Atoms/FancyLine';
import { TLayer } from '@/Components/UI/Interface/TLayer';

// get props from the Fieldset and the FancyListBox
type TFieldSetProps = React.ComponentProps<typeof Fieldset>;
type TFancyListProps = React.ComponentProps<typeof FancyListBox>;

// combine the props and add the displayLine prop
type TFancyBoxSet = TFieldSetProps & TFancyListProps & { displayLine?: boolean };
// --------------------------------------------------------------------------- //
// ----- The FancyBoxSet to render the ListBox with a Fieldset and a Line ---- //
// --------------------------------------------------------------------------- //
export default function FancyBoxSet(props: TFancyBoxSet) {
  const { label, alignLabel, fontVariantLegend, disabled, children, themeType, displayLine, layer, ...HTMLProps } = {
    ...defaultProp,
    ...props,
  };

  // is needed to get the length of the children for displaying the line
  const childArray = React.Children.toArray(children);

  return (
    // Give the list with the Fieldset a label
    <Fieldset label={label} alignLabel={alignLabel} fontVariantLegend={fontVariantLegend} disabled={disabled}>
      {/* The FancyListbox gives the style */}
      <FancyListBox themeType={themeType} layer={layer} {...HTMLProps}>
        {childArray.map((child, i) => (
          <>
            {/* Merge the Item with the FancyLine to Seperate the items  */}
            <FancyListBox.Item>{child}</FancyListBox.Item>
            {displayLine && childArray.length - 1 !== i && (
              <FancyLine themeType={themeType ?? 'primary'} layer={Math.min(layer ? layer + 2 : 2, 10) as TLayer} />
            )}
          </>
        ))}
      </FancyListBox>
    </Fieldset>
  );
}

const defaultProp: TFancyBoxSet = {
  layer: 1,
  displayLine: true,
};
