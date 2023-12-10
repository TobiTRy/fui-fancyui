import React from 'react';
import { CSSProp, css } from 'styled-components';

import { RawNav } from '@/components/atoms/RawNav';

type TFancyNavBar = {
  children?: React.ReactNode;
  externalStyle?: CSSProp;
} & React.HTMLAttributes<HTMLElement>;

export default function FancyNavBar(props: TFancyNavBar) {
  const { children, externalStyle } = props;

  return (
    <RawNav
      $externalStyle={css`
        height: auto;
        display: flex;
        align-items: center;
        ${externalStyle}
      `}
    >
      {children}
    </RawNav>
  );
}
