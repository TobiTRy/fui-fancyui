import styled, { CSSProp } from 'styled-components';

export const DesignWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: space-around;
  align-items: center;
`;

import React from 'react';
const Area = styled.div<{$style: CSSProp}>`
  width: 90%;
  display: flex;
  flex-direction: column;
  color: white;
  
  & > h1 {
    text-align: center;
    margin-top: 50px;
    margin-bottom: 24px;
  }
  
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 24px;
    
    ${({$style}) => $style}
  }
  
  
  @media (min-width: 768px) {
    & > div {
      justify-content: space-around;
      display: flex;
      flex-direction: row;
      gap: 24px;
      ${({$style}) => $style}
    }
  }
`;

export function DesignArea({ children, title, style }: { title: string; children: React.ReactNode, style?: CSSProp }) {


  return (
    <Area $style={style}>
      <h1>{title}</h1>
      <div>{children}</div>
    </Area>
  );
}
