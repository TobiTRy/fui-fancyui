/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import styled, { css } from 'styled-components';
import { testColors } from '@/design/theme/generateThemeColor/generateThemeColor';
import themeStore from '../../design/theme/themeStore/themeStore';
import { TTheme } from '@/types/TTheme';

export default function ColorGeneratorRoute() {
  const theme = themeStore((state) => state.theme);
  //get keys of primary
  const primaryKeys = Object?.keys(testColors.primary);
  const accentKeys = Object?.keys(testColors.accent);
  const secondaryKeys = Object?.keys(testColors.secondary);
  const infoKeys = Object?.keys(testColors.info);
  const warningKeys = Object?.keys(testColors.warning);
  const errorKeys = Object?.keys(testColors.error);
  const successKeys = Object?.keys(testColors.success);

  return (
    <div style={{ display: 'flex' }}>
      <div>
        {primaryKeys?.map((color, index) => {
          return (
            <div
              key={index}
              style={{ width: '100px', height: '100px', backgroundColor: testColors.primary[color] }}
            ></div>
          );
        })}
      </div>
      <div>
        {accentKeys?.map((color, index) => {
          return (
            <div
              key={index}
              style={{ width: '100px', height: '100px', backgroundColor: testColors.accent[color] }}
            ></div>
          );
        })}
      </div>
      <div>
        {infoKeys?.map((color, index) => {
          return (
            <div
              key={index}
              style={{ width: '100px', height: '100px', backgroundColor: testColors.accent[color] }}
            ></div>
          );
        })}
      </div>

      <div>
        {secondaryKeys?.map((color, index) => {
          return (
            <div
              key={index}
              style={{ width: '100px', height: '100px', backgroundColor: testColors.secondary[color] }}
            ></div>
          );
        })}
      </div>
      <div>
        {warningKeys?.map((color, index) => {
          return (
            <div
              key={index}
              style={{ width: '100px', height: '100px', backgroundColor: testColors.warning[color] }}
            ></div>
          );
        })}
      </div>
      <div>
        {errorKeys?.map((color, index) => {
          return (
            <div
              key={index}
              style={{ width: '100px', height: '100px', backgroundColor: testColors.error[color] }}
            ></div>
          );
        })}
      </div>
      <div>
        {successKeys?.map((color, index) => {
          return (
            <div
              key={index}
              style={{ width: '100px', height: '100px', backgroundColor: testColors.success[color] }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
