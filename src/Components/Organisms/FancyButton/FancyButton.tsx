import React from 'react';
import { css } from 'styled-components';

import LoadingSVGArrows from '../../atoms/LoadingSVGArrows/LoadingSVGArrows';
import Button, { IButtonProps } from '../../molecules/Button/Button';
import FancyContent from '../../molecules/FancyContent/FancyContent';
import { generateFancyButton } from './FancyButton.style';

import { IButton } from '../../molecules/Button/Button';
import { TTypography } from '@/components/core/interface/TTypography';
import { TBorderRadiusSizes } from '@/components/core/interface/TBorderRadius';

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
  borderRadius?: TBorderRadiusSizes;
  oneToOne?: boolean;
  icon?: React.ReactNode;
  fontVariant?: TTypography;
  noPadding?: boolean;
};

// --------------------------------------------------------------------------- //
// ---------- The Fancy Button has a bit more options than another  ---------- //
// --------------------------------------------------------------------------- //
type IFancyButton = IFancyButtonProps & IButton;
export default function FancyButton(props: IFancyButton) {
  const { icon, label, isLoading, iconAlign, size, align, externalStyle, oneToOne, noPadding, fontVariant, borderRadius, ...buttonProps } =
    {
      ...defaultProps,
      ...props,
    };

  const generateFancyStyle = generateFancyButton({
    $size: size,
    $borderRadius: borderRadius,
    $oneToOne: oneToOne || (Boolean(!label) && Boolean(icon)),
    $outlined: props.outlined,
    $justifyContent: alignment[align ?? 'center'],
    $noPadding: noPadding,
  });

  // handle icon alignment
  const alignIcon = iconAlign === 'left' ? 'row' : 'row-reverse';

  return (
    <Button
      size={size}
      externalStyle={css`
        ${generateFancyStyle};
        ${externalStyle};
      `}
      {...(buttonProps as IButtonProps)}
    >
      <FancyContent flexDirection={alignIcon}>
        {label && <FancyContent.Title fontVariant={fontVariant ?? 'button'}>{label}</FancyContent.Title>}
        {(isLoading || icon) && (
          <FancyContent.Icon>{isLoading ? <LoadingSVGArrows isLoading={isLoading} size={size} /> : icon}</FancyContent.Icon>
        )}
      </FancyContent>
    </Button>
  );
}

const defaultProps: IFancyButton = {
  themeType: 'accent',
  size: 'lg',
  align: 'center',
};
