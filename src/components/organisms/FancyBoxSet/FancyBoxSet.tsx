import React from 'react';

import { Fieldset } from '@/components/molecules/Fieldset';
import { ListBox } from '@/components/molecules/ListBox';
import { FancyLine } from '@/components/atoms/FancyLine';

import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

// get props from the Fieldset and the ListBox
type TFieldSetProps = React.ComponentProps<typeof Fieldset>;
type TFancyListProps = React.ComponentProps<typeof ListBox>;

// combine the props and add the displayLine prop
type TFancyBoxSet = TFieldSetProps &
  TFancyListProps & { displayLine?: boolean; lineThemeType?: TUiColorsNotTransparent };
// --------------------------------------------------------------------------- //
// ----- The FancyBoxSet to render the ListBox with a Fieldset and a Line ---- //
// --------------------------------------------------------------------------- //
export default function FancyBoxSet(props: TFancyBoxSet) {
  const {
    label,
    alignLabel,
    fontVariantLegend,
    disabled,
    children,
    themeType,
    lineThemeType,
    displayLine,
    layer,
    ...HTMLProps
  } = {
    ...defaultProp,
    ...props,
  };

  // is needed to get the length of the children for displaying the line
  const childArray = React.Children.toArray(children);

  return (
    // Give the list with the Fieldset a label
    <Fieldset label={label} alignLabel={alignLabel} fontVariantLegend={fontVariantLegend} disabled={disabled}>
      {/* The ListBox gives the style */}
      <ListBox themeType={themeType} layer={layer} {...HTMLProps}>
        {childArray.map((child, i) => (
          <React.Fragment key={i}>
            {/* Merge the Item with the FancyLine to Seperate the items  */}
            <ListBox.Item>{child}</ListBox.Item>
            {displayLine && childArray.length - 1 !== i && (
              <FancyLine themeType={lineThemeType ?? 'primary'} layer={Math.min(layer ? layer + 2 : 2, 9) as TLayer} />
            )}
          </React.Fragment>
        ))}
      </ListBox>
    </Fieldset>
  );
}

const defaultProp: TFancyBoxSet = {
  layer: 1,
  displayLine: true,
};
