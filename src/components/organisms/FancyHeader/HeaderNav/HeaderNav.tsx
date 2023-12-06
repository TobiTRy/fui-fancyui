import React from 'react';

import { RawNav } from '@/components/atoms/RawNav';
import { RawUL } from '@/components/atoms/RawUL';
import { RawLI } from '@/components/atoms/RawLI';

interface IHeaderNav {
  children?: React.ReactNode;
}
export default function HeaderNav({ children }: IHeaderNav) {
  const MapedChilds = React.Children.map(children, (child) => {
    console.log(child);
    if (React.isValidElement(child)) {
      return <RawLI>{child}</RawLI>;
    }
    return child;
  });

  return (
    <RawNav>
      <RawUL>{MapedChilds}</RawUL>
    </RawNav>
  );
}
