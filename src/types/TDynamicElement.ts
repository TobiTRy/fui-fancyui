export type TDynamicElementProps<T extends React.ElementType> = {
  as?: T;
} & Omit<React.ComponentProps<T>, 'as'>;
