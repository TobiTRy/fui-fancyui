import React from 'react';

import { SwitchList } from '@/components/molecules/SwitchList';

type TSwitchIndicatorListProps = {
  children?: React.ReactNode;
} & React.ComponentProps<typeof SwitchList>;

export default function SwitchIndicatorList(props: TSwitchIndicatorListProps) {
  const { children, flexBoxProps, ...switchListProps } = props;
  return (
    <SwitchList
      flexBoxProps={{
        as: flexBoxProps?.as ?? 'ul',
        flexDirection: flexBoxProps?.flexDirection ?? 'row',
        flexAlign: flexBoxProps?.flexAlign ?? 'center',
        flexJustify: flexBoxProps?.flexJustify ?? 'center',
      }}
      {...switchListProps}
    >
      {children}
    </SwitchList>
  );
}
