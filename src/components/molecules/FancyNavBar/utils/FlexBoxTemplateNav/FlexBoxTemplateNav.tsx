import React from 'react';
import { FancyFlexBox } from '@/components/templates/FancyFlexBox';

type TFlexBoxTemplateNavProps = {
  children?: React.ReactNode;
} & React.ComponentProps<typeof FancyFlexBox>;
export default function FlexBoxTemplateNav(props: TFlexBoxTemplateNavProps) {
  const { children, ...flexProps } = props;

  return (
    <FancyFlexBox
      as={flexProps.as ?? 'ul'}
      flexDirection={flexProps.flexDirection ?? 'row'}
      flexAlign={flexProps.flexAlign ?? 'center'}
      flexJustify={flexProps.flexJustify ?? 'center'}
    >
      {children}
    </FancyFlexBox>
  );
}
