'use client';

import { css } from 'styled-components';

import { RawNav } from '@/components/atoms/RawNav';
import { TFancyNavBarWithHTMLProps } from './TFancyNavBar.model';

export default function FancyNavBar(props: TFancyNavBarWithHTMLProps) {
  const { children, externalStyle, ...htmlProps } = props;

  return (
    <RawNav
      $externalStyle={css`
        height: auto;
        display: flex;
        align-items: center;
        ${externalStyle}
      `}
      {...htmlProps}
    >
      {children}
    </RawNav>
  );
}
