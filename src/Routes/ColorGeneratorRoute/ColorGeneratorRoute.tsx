/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import styled, { css } from 'styled-components';

import themeStore from '../../Components/design/color/themeStore/themeStore';
import { TTheme } from '@/Components/Interface/TTheme';

export default function ColorGeneratorRoute() {
  const theme = themeStore((state) => state.theme);
  //get keys of primary
  const primaryKeys = Object?.keys(theme?.colors.primary);
  const accentKeys = Object?.keys(theme?.colors.accent);
  const secondaryKeys = Object?.keys(theme?.colors.secondary);
  const infoKeys = Object?.keys(theme?.colors.info);
  const warningKeys = Object?.keys(theme?.colors.warning);
  const errorKeys = Object?.keys(theme?.colors.error);
  const successKeys = Object?.keys(theme?.colors.success);

  return (
    <div style={{ display: 'flex' }}>
      <div>
        {primaryKeys?.map((color, index) => {
          return <div key={index} style={{ width: '100px', height: '100px', backgroundColor: theme.colors.primary![color] }}></div>;
        })}
      </div>
      <div>
        {accentKeys?.map((color, index) => {
          return <div key={index} style={{ width: '100px', height: '100px', backgroundColor: theme.colors.accent![color] }}></div>;
        })}
      </div>
      <div>
        {infoKeys?.map((color, index) => {
          return <div key={index} style={{ width: '100px', height: '100px', backgroundColor: theme.colors.accent![color] }}></div>;
        })}
      </div>

      <div>
        {secondaryKeys?.map((color, index) => {
          return <div key={index} style={{ width: '100px', height: '100px', backgroundColor: theme.colors.secondary![color] }}></div>;
        })}
      </div>
      <div>
        {warningKeys?.map((color, index) => {
          return <div key={index} style={{ width: '100px', height: '100px', backgroundColor: theme.colors.warning![color] }}></div>;
        })}
      </div>
      <div>
        {errorKeys?.map((color, index) => {
          return <div key={index} style={{ width: '100px', height: '100px', backgroundColor: theme.colors.error![color] }}></div>;
        })}
      </div>
      <div>
        {successKeys?.map((color, index) => {
          return <div key={index} style={{ width: '100px', height: '100px', backgroundColor: theme.colors.success![color] }}></div>;
        })}
      </div>
    </div>
  );
}
