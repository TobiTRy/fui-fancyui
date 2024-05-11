import { ElementType } from 'react';

// Props for dynamic element type
export type TDynamicElement<T extends ElementType> = {
  as?: ElementType;
} & React.HTMLAttributes<T>;
