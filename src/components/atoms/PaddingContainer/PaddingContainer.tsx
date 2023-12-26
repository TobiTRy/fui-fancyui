import React from 'react';

import { arrayToCssValues } from '@/design/designFunctions/arrayToCssValues';
import { TArrayToCssValues } from '@/design/designFunctions/arrayToCssValues';

interface IPaddingContainer {
  children?: React.ReactNode;
  padding?: TArrayToCssValues;
}
export default function PaddingContainer(props: IPaddingContainer) {
  const { children, padding } = props;

  const paddingCss = arrayToCssValues(padding);

  console.log(paddingCss);

  return <div>{children}</div>;
}
