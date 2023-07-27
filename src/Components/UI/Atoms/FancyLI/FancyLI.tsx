import React from 'react';
import { IcalcIconPaddingAsProps } from '../../HelperFunctions/generateIconPadding';
import FancyLiItem from './FancyLI.style';
import Typography from '../Typography/Typography';

interface FancyLIProps {
  icon?: React.ReactNode;
  label?: string;
  wide?: boolean;
}

export type IFancyLi = FancyLIProps & IcalcIconPaddingAsProps;
// --------------------------------------------------------------------------- //
// ------------- The fancy LI Item that can dynamicly adjusted --------------- //
// --------------------------------------------------------------------------- //
export default function FancyLI(props: IFancyLi) {
  const { icon, label, size, aligned, wide } = {...defaultProps, ...props};

  return (
    <FancyLiItem $size={size} $aligned={aligned} $wide={wide}>
      {icon && <i>{icon}</i>}
      <Typography type='content' variant='label'>{label}</Typography>
    </FancyLiItem>
  );
}

const defaultProps:IFancyLi = {
  size: 'medium',
  aligned: 'left',
  label: 'Label',
  wide: true,
};
