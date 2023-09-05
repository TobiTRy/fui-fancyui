import React from 'react';

import { colorSteps } from '../../Components/UI/Design/design';
import styled, { css } from 'styled-components';
import { Typography } from '../../lib';

const BackGroundBox = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${colorSteps.primary[90]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


export default function ColorGeneratorRoute() {
  //get keys of primary
  const primaryKeys = Object.keys(colorSteps.primary!);
  const accentKeys = Object.keys(colorSteps.accent!);
  const secondaryKeys = Object.keys(colorSteps.secondary!);

  return (
    <div style={{ display: 'flex' }}>
      <div>
        {primaryKeys?.map((color, index) => {
          return <div key={index} style={{ width: '100px', height: '100px', backgroundColor: colorSteps.primary![color] }}></div>;
        })}
      </div>
      <div>
        {accentKeys?.map((color, index) => {
          return <div key={index} style={{ width: '100px', height: '100px', backgroundColor: colorSteps.accent![color] }}></div>;
        })}
      </div>
      <div>
        {secondaryKeys?.map((color, index) => {
          return <div key={index} style={{ width: '100px', height: '100px', backgroundColor: colorSteps.secondary![color] }}></div>;
        })}
      </div>
      <div>
        <BackGroundBox>
          <Typography type='h1' style={css`color: ${colorSteps.secondary[90]}`}>H1</Typography>
        </BackGroundBox>
      </div>
    </div>
  );
}
