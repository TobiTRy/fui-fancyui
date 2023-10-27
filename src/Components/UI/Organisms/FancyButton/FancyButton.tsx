import React from 'react';

import LoadingSVGArrows from '../../Atoms/LoadingSVGArrows/LoadingSVGArrows';
import Button, { IButtonProps } from '../../Molecules/Button/Button';
import FancyContent from '../../Molecules/FancyContent/FancyContent';

type IFancyButtonProps = {
  isLoading?: boolean;
  label?: string;
  align?: 'left' | 'right' | 'center';
  iconAlign?: 'left' | 'right';
  icon?: React.ReactNode;
};
// --------------------------------------------------------------------------- //
// ---------- The Fancy Button has a bit more options than another  ---------- //
// --------------------------------------------------------------------------- //
type IFancyButton = IFancyButtonProps & IButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;
export default function FancyButton(props: IFancyButton) {
  const { icon, label, isLoading, iconAlign, size, ...ButtonProps } = {
    ...defaultProps,
    ...props,
  };

  // hanlde loadingstate with
  const showIcon = icon && !isLoading;
  // handle icon alignment
  const alignIcon = iconAlign === 'left' ? 'row' : 'row-reverse';

  return (
    <Button size={size} oneToOne={Boolean(!label) && Boolean(icon)} {...ButtonProps}>
      <FancyContent
        flexDirection={alignIcon}
        text={label}
        icon={showIcon ? icon : isLoading ? <LoadingSVGArrows isLoading={isLoading} size={size} /> : null}
      />
    </Button>
  );
}

const defaultProps: IFancyButton = {
  themeType: 'accent',
  size: 'lg',
  align: 'center',
};
