import React from 'react';
import { IcalcIconPadding } from '../../HelperFunctions/generateIconPadding';
import FancyLiItem from './FancyLI.style';

interface FancyLI {
  icon?: React.ReactNode;
  label?: string;
  wide?: boolean;
}

export type IFancyLi = FancyLI & IcalcIconPadding;
// --------------------------------------------------------------------------- //
// ------------- The fancy LI Item that can dynamicly adjusted --------------- //
// --------------------------------------------------------------------------- //
export default function FancyLI(props: IFancyLi) {
  const { icon, label, size, aligned, wide } = props;

  return (
    <FancyLiItem $size={size} $aligned={aligned} $wide={wide}>
      {icon && <i>{icon}</i>}
      <p>{label}</p>
    </FancyLiItem>
  );
}

FancyLI.defaultProps = {
  size: 'medium',
  aligned: 'left',
  label: 'Label',
  wide: true,
};
