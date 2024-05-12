/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import styled, { css } from 'styled-components';

import themeStore from '../../design/theme/themeStore/themeStore';
import { TTheme } from '@/types/TTheme';

export default function ColorGeneratorRoute() {
  const theme = themeStore((state) => state.theme);
  //get keys of primary
  const primaryKeys = Object?.keys(theme?.color.primary);
  const accentKeys = Object?.keys(theme?.color.accent);
  const secondaryKeys = Object?.keys(theme?.color.secondary);
  const infoKeys = Object?.keys(theme?.color.info);
  const warningKeys = Object?.keys(theme?.color.warning);
  const errorKeys = Object?.keys(theme?.color.error);
  const successKeys = Object?.keys(theme?.color.success);

  return (
    <div style={{ display: 'flex' }}>
      <div>
        {primaryKeys?.map((color, index) => {
          return (
            <div
              key={index}
              style={{ width: '100px', height: '100px', backgroundColor: theme.color.primary[color] }}
            ></div>
          );
        })}
      </div>
      <div>
        {accentKeys?.map((color, index) => {
          return (
            <div
              key={index}
              style={{ width: '100px', height: '100px', backgroundColor: theme.color.accent[color] }}
            ></div>
          );
        })}
      </div>
      <div>
        {infoKeys?.map((color, index) => {
          return (
            <div
              key={index}
              style={{ width: '100px', height: '100px', backgroundColor: theme.color.accent[color] }}
            ></div>
          );
        })}
      </div>

      <div>
        {secondaryKeys?.map((color, index) => {
          return (
            <div
              key={index}
              style={{ width: '100px', height: '100px', backgroundColor: theme.color.secondary[color] }}
            ></div>
          );
        })}
      </div>
      <div>
        {warningKeys?.map((color, index) => {
          return (
            <div
              key={index}
              style={{ width: '100px', height: '100px', backgroundColor: theme.color.warning[color] }}
            ></div>
          );
        })}
      </div>
      <div>
        {errorKeys?.map((color, index) => {
          return (
            <div
              key={index}
              style={{ width: '100px', height: '100px', backgroundColor: theme.color.error[color] }}
            ></div>
          );
        })}
      </div>
      <div>
        {successKeys?.map((color, index) => {
          return (
            <div
              key={index}
              style={{ width: '100px', height: '100px', backgroundColor: theme.color.success[color] }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
