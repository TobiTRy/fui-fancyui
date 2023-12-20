import React from 'react';
import { styled } from 'styled-components';

import { TTheme } from '@/interface/TTheme';
import { TLayer } from '@/interface/TLayer';
import IStyledPrefixAndOmitter from '@/interface/IStyledPrefixAndOmiter';
import { TThemeTypesNotTransparent } from '@/interface/TThemeTypesNotTransparent';

import { RawButton } from '@/components/atoms/RawButton';
import { SVGXCircle } from '@/components/icons/SVGXCircle';
import { sizesSettings } from '@/components/molecules/Chip/sizeSettings';
import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent';

type IXButtonProps = {
  size?: keyof typeof sizesSettings;
  children?: React.ReactNode;
  themeType?: TThemeTypesNotTransparent;
  layer?: TLayer;
  onDelete?: () => void;
};

export default function ChipDeleteButton(props: IXButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { size, onDelete, children, 'aria-label': ariaLabel, layer, themeType, ...htmlProps } = props;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (onDelete && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onDelete();
    }
  };

  return (
    <StyledXButton
      aria-label={ariaLabel || 'delete'}
      $themeType={themeType}
      $layer={layer}
      $size={size}
      onKeyDown={handleKeyDown}
      onClick={onDelete}
      {...htmlProps}
    >
      {children || <SVGXCircle />}
    </StyledXButton>
  );
}

type TXButton = IStyledPrefixAndOmitter<IXButtonProps, 'children'>;
export const StyledXButton = styled(RawButton)<TXButton & { theme: TTheme }>`
  border: none;
  cursor: pointer;
  color: inherit;
  background-color: transparent;
  padding: 0;
  line-height: 1;
  display: flex;
  align-items: center;
  color: ${({ theme, $themeType = 'secondary', $layer = 3 }) => getBackgroundColor({ theme, $themeType, $layer })};

  svg {
    width: ${({ $size }) => ($size ? sizesSettings[$size].deleteButtonSize : sizesSettings.md.deleteButtonSize)};
    height: ${({ $size }) => ($size ? sizesSettings[$size].deleteButtonSize : sizesSettings.md.deleteButtonSize)};
  }
`;
