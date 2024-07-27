'use client';

import React from 'react';

interface Props {
  wrapper: React.ReactElement;
  children: React.ReactNode;
}
// --------------------------------------------------------------------------- //
// --------- This component is used when you have a dynamic wrapper ---------- //
// --------------------------------------------------------------------------- //
export default function ComponentAsWrapper({ wrapper, children }: Props) {
  // Clone the element to inject children
  return React.cloneElement(wrapper, {}, children);
}
