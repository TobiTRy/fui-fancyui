export type TStyleProps = {
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  flexJustify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  flexAlign?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  gap?: string;
};

export type FancyFlexBoxProps = {
  children?: React.ReactNode;
  separator?: React.ReactNode;
  inline?: boolean;
} & TStyleProps;
