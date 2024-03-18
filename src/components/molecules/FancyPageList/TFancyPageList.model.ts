// Define the props for the FancyPageList component
export type TFancyPageList = {
  itemsPerPage?: number;
  elements: React.ReactNode[];
  spacingBetweenItems?: string;
  showPages?: number;
  buttonDesign?: 'accent' | 'primary' | 'transparent';
  outlinedButton?: boolean;
};

export type TFancyPageListWithHTMLAttrs = TFancyPageList & React.HTMLAttributes<HTMLDivElement>;
