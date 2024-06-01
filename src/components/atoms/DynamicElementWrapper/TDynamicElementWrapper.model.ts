import { ElementType } from 'react';
import { CSSProp } from 'styled-components';

export type TDynamicElementWrapper = {
  as?: ElementType;
  externalStyle?: CSSProp;
};

export type TDynamicElementWrapperWithHTMLAttrs<T extends ElementType = 'div'> = TDynamicElementWrapper &
  React.DetailedHTMLProps<React.HTMLAttributes<T>, T>;
