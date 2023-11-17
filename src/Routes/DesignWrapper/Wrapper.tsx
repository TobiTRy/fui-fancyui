import React from 'react';
import { styled, CSSProp } from 'styled-components';

import { TTheme } from '@/Components/UI/Design/color/themeStore';

export const DesignWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: space-around;
  align-items: center;
`;

const Area = styled.div<{ $style: CSSProp, theme: TTheme }>`
  width: 90%;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.secondary[0]};

  & > h1 {
    text-align: center;
    margin-top: 50px;
    margin-bottom: 24px;
  }

  & > div {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 24px;

    ${({ $style }) => $style}
  }

  @media (min-width: 768px) {
    & > div {
      justify-content: space-around;
      display: flex;
      flex-direction: row;
      gap: 24px;
      ${({ $style }) => $style}
    }
  }
`;

export function DesignArea({ children, title, style }: { title: string; children: React.ReactNode; style?: CSSProp }) {
  return (
    <Area $style={style}>
      <h2>{title}</h2>
      <div>{children}</div>
    </Area>
  );
}
