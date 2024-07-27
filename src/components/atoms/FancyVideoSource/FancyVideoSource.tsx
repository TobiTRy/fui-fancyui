'use client';

import React from 'react';

type IFancyVideoSourceProps = {
  src: string;
  type: string;
} & React.SourceHTMLAttributes<HTMLSourceElement>;

export default function FancyVideoSource(props: IFancyVideoSourceProps) {
  return <source {...props} src={props.src} type={props.type} />;
}
