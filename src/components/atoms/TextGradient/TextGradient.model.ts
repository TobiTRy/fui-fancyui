import React from 'react';

export type GradientOrientation =
  | 'linear'
  | 'radial'
  | 'elliptical'
  | 'repeatLinear'
  | 'repeatRadial'
  | 'repeatElliptical';
export type GradientPosition =
  | 'left'
  | 'right'
  | 'top'
  | 'bottom'
  | 'center'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right';

export type TGradientColor = {
  color: string;
  stop?: string; // This can be a percentage or a pixel value (e.g., '50%', '100px')
};

export type TTextGradientProps = {
  children: React.ReactNode;
  degree?: number;
  colors: string[] | TGradientColor[];
  orientation?: GradientOrientation;
  position?: GradientPosition;
};
