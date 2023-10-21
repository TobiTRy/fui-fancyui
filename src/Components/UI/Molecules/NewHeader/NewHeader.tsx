import React from 'react';

import styled, { CSSProp } from 'styled-components';
import FancyBar from '../../Atoms/FancyBar/FancyBar';

const Wrapper = styled.div``;

export interface IHeader {
  children?: React.ReactNode;
  alignmentStyle?: CSSProp;
  barStyle?: CSSProp;
}

type FancyBarProps = React.ComponentProps<typeof FancyBar>;

export default function NewHeader(props: IHeader & FancyBarProps) {
  const { children,  ...FancyBarProps } = props;

  return <FancyBar {...FancyBarProps}>{children}</FancyBar>;
}
