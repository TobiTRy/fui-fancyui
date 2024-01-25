import React from 'react';

import { ListBox } from '@/components/molecules/ListBox';
// import { FancyLine } from '@/components/atoms/FancyLine';
// import { clampLayer } from '@/utils/functions/clampLayer';
import { TUiColorsMain } from '@/types/TUiColorsMain';

type TFancyListBox = {
  children: React.ReactNode;
  seperator?: boolean;
  themeType?: TUiColorsMain;
};
export default function FancyListBox(props: TFancyListBox) {
  const { children } = props;

  return (
    <ListBox>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return (
            <>
              <ListBox.Item>{child}</ListBox.Item>
              {/* {index !== 0 && <FancyLine themeType="primary" layer={clampLayer(layer ? layer + 2 : 3)} />} */}
            </>
          );
        }
      })}
    </ListBox>
  );
}
