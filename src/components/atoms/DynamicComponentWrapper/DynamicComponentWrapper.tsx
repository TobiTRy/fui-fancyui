'use client';

import { cloneElement } from 'react';
import { TDynamicComponentWrapper } from './TDynamicComponentWrapper.model';

// --------------------------------------------------------------------------- //
// - This component wrapps every childrens with the passed wrapper component - //
// --------------------------------------------------------------------------- //
export default function DynamicComponentWrapper(props: TDynamicComponentWrapper) {
  const { children, wrapperComponent } = props;

  return cloneElement(wrapperComponent, {}, children);
}
