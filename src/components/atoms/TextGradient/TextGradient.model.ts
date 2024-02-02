import React from 'react';

export type LinearOrientation = 'linear' | 'repeatLinear';
export type NonLinearOrientation = 'radial' | 'elliptical' | 'repeatRadial' | 'repeatElliptical';

export type GradientOrientation = LinearOrientation | NonLinearOrientation;

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

type BaseGradientProps = {
  children: React.ReactNode;
  colors: string[] | TGradientColor[];
  orientation?: GradientOrientation;
};

// This is a union type that will only allow one of the two properties to be present
type avalableAlignment =
  | {
      degree: number;
      position?: never;
    }
  | {
      degree?: never;
      position: GradientPosition;
    };

// This is a union type that will only allow one of the two properties to be present
type LinearGradientProps = BaseGradientProps & {
  orientation: LinearOrientation;
} & avalableAlignment;

// This is a union type that will only allow one of the two properties to be present
type NonLinearGradientProps = BaseGradientProps & {
  orientation?: NonLinearOrientation;
  degree?: never;
  position?: GradientPosition;
};

export type TTextGradientProps = LinearGradientProps | NonLinearGradientProps;
