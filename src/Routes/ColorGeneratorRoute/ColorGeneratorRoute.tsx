import React from 'react';

import { uiColors } from '../../Components/UI/Design/design';
import styled, { css } from 'styled-components';
import { Typography } from '../../lib';

const BackGroundBox = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${uiColors.primary[0]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


export default function ColorGeneratorRoute() {
  //get keys of primary
  const primaryKeys = Object.keys(uiColors.primary);
  const accentKeys = Object.keys(uiColors.accent);
  const secondaryKeys = Object.keys(uiColors.secondary);

  return (
    <div style={{ display: 'flex' }}>
      <div>
        {primaryKeys?.map((color, index) => {
          return <div key={index} style={{ width: '100px', height: '100px', backgroundColor: uiColors.primary![color] }}></div>;
        })}
      </div>
      <div>
        {accentKeys?.map((color, index) => {
          return <div key={index} style={{ width: '100px', height: '100px', backgroundColor: uiColors.accent![color] }}></div>;
        })}
      </div>
      {/* <div>
        {
          accentDarkKeys?.map((color, index) => {
            return <div key={index} style={{ width: '100px', height: '100px', backgroundColor: colorSteps.accentDarken![color] }}></div>;
          })
        }
      </div> */}
      <div>
        {secondaryKeys?.map((color, index) => {
          return <div key={index} style={{ width: '100px', height: '100px', backgroundColor: uiColors.secondary![color] }}></div>;
        })}
      </div>
      <div>
        <BackGroundBox>
          <Typography type='h1' style={css`color: ${uiColors.secondary[90]}`}>H1</Typography>
        </BackGroundBox>
      </div>
    </div>
  );
}
