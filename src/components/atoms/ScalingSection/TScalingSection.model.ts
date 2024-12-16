export type TScalingSection = {
  handleScaling: (state: 'move' | 'end', currentPos: number) => void;
  onClick?: () => void;
};
