import styled from 'styled-components';

export const DesignWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: space-around;
  align-items: center;
`;

import React from 'react';
const Area = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
;

  color: white;
  
  & > h1 {
    text-align: center;
    margin-top: 50px;
    margin-bottom: 24px;
  }
  
  & > div {
    flex-direction: column;
  }

  @media (min-width: 768px) {
    & > div {
      justify-content: space-around;
      display: flex;
      flex-direction: row;
      gap: 24px;
    }
  }
`;

export function DesignArea({ children, title }: { title: string; children: React.ReactNode }) {
  return (
    <Area>
      <h1>{title}</h1>
      <div>{children}</div>
    </Area>
  );
}
