import { styled, CSSProp } from 'styled-components';
import React from 'react';
import themeStore from '../../Components/UI/Design/color/themeStore';
import { TUiColorsType } from '../../Components/UI/Design/color/designColor';

export const DesignWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: space-around;
  align-items: center;
`;

const Area = styled.div<{ $style: CSSProp, theme: TUiColorsType }>`
  width: 90%;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.secondary[0]};

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
