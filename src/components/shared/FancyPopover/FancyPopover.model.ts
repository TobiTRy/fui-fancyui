import React from 'react';

export type TFancyPopover = {
  isOpen?: boolean;
  onOutsideClick?: (event: MouseEvent) => void;
  refComponent: React.ReactElement;
  contentComponent: React.ReactElement;
  offsetX?: number; // horizontal offset
  offsetY?: number; // vertical offset
};

export type TFancyPopoverWithHTMLAttrs = TFancyPopover & React.HTMLAttributes<HTMLDivElement>;
