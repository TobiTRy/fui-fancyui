// Define the possible positions for the overlay
export type TPositions =
  | 'top-left'
  | 'top-right'
  | 'center'
  | 'bottom-left'
  | 'bottom-right'
  | 'bottom-center'
  | 'top-center';

// Define the props for the ImageVideoOverlay component
export type TImageVideoOverlay = {
  children?: React.ReactNode;
  textChildren?: React.ReactNode;
  position?: TPositions;
};

export type TImageVideoOverlayWithHTMLAttrs = TImageVideoOverlay & React.HTMLAttributes<HTMLDivElement>;
