import React from 'react';

import { RawNav } from '@/components/atoms/RawNav';
import { RawLI } from '@/components/atoms/RawLI';
import { FancyFlexBox } from '@/components/templates/FancyFlexBox';
import { SwitchList } from '@/components/molecules/SwitchList';

type TFancyNavBar = {
  children?: React.ReactNode;
  switchIndicator?: boolean;
} & React.ComponentProps<typeof FancyFlexBox>;

export default function FancyNavBar(props: TFancyNavBar) {
  const { children, switchIndicator, ...flexProps } = props;

  return (
    <RawNav>
      {switchIndicator ? (
        <SwitchList>{children}</SwitchList>
      ) : (
        <FancyFlexBox as="ul" flexDirection={flexProps.flexDirection ?? 'row'} flexAlign={flexProps.flexAlign ?? 'center'}>
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              return <RawLI>{child}</RawLI>;
            }
            return child;
          })}
        </FancyFlexBox>
      )}
    </RawNav>
  );
}
