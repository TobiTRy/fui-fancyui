import React from 'react';

import { Fieldset } from '@/Components/UI/Molecules/Fieldset';
import { FancyListBox } from '@/Components/UI/Molecules/FancyListBox';
import { FancyLine } from '@/Components/UI/Atoms/FancyLine';

type TFieldSetProps = React.ComponentProps<typeof Fieldset>;
type TFancyListProps = React.ComponentProps<typeof FancyListBox>;

type TFancyBoxSet = TFieldSetProps & TFancyListProps;
export default function FancyBoxSet(props: TFancyBoxSet) {
  const { label, alignLabel, fontVariantLegend, disabled, children, ...HTMLProps } = props;

  const childArray = React.Children.toArray(children);

  return (
    <Fieldset label={label} alignLabel={alignLabel} fontVariantLegend={fontVariantLegend} disabled={disabled}>
      <FancyListBox {...HTMLProps}>
        {childArray.map((child, i) => (
          <>
            <FancyListBox.Item>{child}</FancyListBox.Item>
            {childArray.length - 1 !== i && <FancyLine themeType="primary" layer={3} />}
          </>
        ))}
      </FancyListBox>
    </Fieldset>
  );
}
