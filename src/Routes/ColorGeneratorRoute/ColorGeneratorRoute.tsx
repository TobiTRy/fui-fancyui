import React from 'react';


import styled, { css } from 'styled-components';
import { Typography } from '../../lib';
import themeStore from '../../Components/UI/Design/color/themeStore';
import { TUiColorsType } from '../../Components/UI/Design/color/designColor';

const BackGroundBox = styled.div<{ theme: TUiColorsType }>`
  width: 200px;
  height: 200px;
  background-color: ${({ theme }) => theme.primary[0]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function ColorGeneratorRoute() {
  const theme = themeStore((state) => state.theme);
  //get keys of primary
  const primaryKeys = Object.keys(theme.primary);
  const accentKeys = Object.keys(theme.accent);
  const secondaryKeys = Object.keys(theme.secondary);

  return (
    <div style={{ display: 'flex' }}>
      <div>
        {primaryKeys?.map((color, index) => {
          return <div key={index} style={{ width: '100px', height: '100px', backgroundColor: theme.primary![color] }}></div>;
        })}
      </div>
      <div>
        {accentKeys?.map((color, index) => {
          return <div key={index} style={{ width: '100px', height: '100px', backgroundColor: theme.accent![color] }}></div>;
        })}
      </div>
      <div>
        {secondaryKeys?.map((color, index) => {
          return <div key={index} style={{ width: '100px', height: '100px', backgroundColor: theme.secondary![color] }}></div>;
        })}
      </div>
      <div>
        {}
      </div>
      <div>
      </div>
    </div>
  );
}
