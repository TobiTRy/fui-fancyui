import React from 'react';

import LoadingSVGArrows from '../../Atoms/LoadingSVGArrows/LoadingSVGArrows';
import { borderRadius } from '../../Design/design';
import Button, { IButtonProps } from '../../Molecules/Button/Button';
import FancyContent from '../../Molecules/FancyContent/FancyContent';
import { generateFancyButton } from './FancyButton.style';
import { css } from 'styled-components';

const alignment = {
  left: 'flex-start' as const,
  right: 'flex-end' as const,
  center: 'center' as const,
};

export type IFancyButtonProps = {
  isLoading?: boolean;
  label?: string;
  align?: 'left' | 'right' | 'center';
  iconAlign?: 'left' | 'right';
  size?: 'sm' | 'md' | 'lg';
  borderRadius?: keyof typeof borderRadius;
  oneToOne?: boolean;
  icon?: React.ReactNode;
};

// --------------------------------------------------------------------------- //
// ---------- The Fancy Button has a bit more options than another  ---------- //
// --------------------------------------------------------------------------- //
type IFancyButton = IFancyButtonProps & IButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;
export default function FancyButton(props: IFancyButton) {
  const { icon, label, isLoading, iconAlign, size, align, externalStyle, ...ButtonProps } = {
    ...defaultProps,
    ...props,
  };

  const generateFancyStyle = generateFancyButton({
    size,
    borderRadius: props.borderRadius,
    oneToOne: Boolean(!label) && Boolean(icon),
    outlined: props.outlined,
    justifyContent: alignment[align ?? 'center'],
  });

  // hanlde loadingstate with
  const showIcon = icon && !isLoading;
  // handle icon alignment
  const alignIcon = iconAlign === 'left' ? 'row' : 'row-reverse';

  return (
    <Button
      size={size}
      externalStyle={css`
        ${generateFancyStyle};
        ${externalStyle};
      `}
      {...ButtonProps}
    >
      <FancyContent flexDirection={alignIcon}>
        {label && <FancyContent.Text fontVariant="button">{label}</FancyContent.Text>}
        {showIcon && <FancyContent.Icon>{isLoading ? <LoadingSVGArrows isLoading={isLoading} size={size} /> : icon}</FancyContent.Icon>}
      </FancyContent>
    </Button>
  );
}

const defaultProps: IFancyButton = {
  themeType: 'accent',
  size: 'lg',
  align: 'center',
};
