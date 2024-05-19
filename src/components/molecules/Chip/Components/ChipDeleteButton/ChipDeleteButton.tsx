import React from 'react';
import { styled } from 'styled-components';

import { TTheme } from '@/types/TTheme';
import { TLayer } from '@/types/TLayer';
import { TStyledPrefixAndOmiter } from '@/types/TStyledPrefixAndOmiter';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

import { RawButton } from '@/components/atoms/RawButton';
import { SVGXCircle } from '@/components/icons';
import { sizesSettings } from '@/components/molecules/Chip/sizeSettings';
import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent';

type IXButtonProps = {
  sizeC?: keyof typeof sizesSettings;
  children?: React.ReactNode;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
  onDelete?: () => void;
};

export default function ChipDeleteButton(props: IXButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { sizeC, onDelete, children, layer, themeType, ...htmlProps } = props;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (onDelete && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onDelete();
    }
  };

  return (
    <StyledXButton
      $themeType={themeType}
      $layer={layer}
      $sizeC={sizeC}
      onKeyDown={handleKeyDown}
      onClick={onDelete}
      {...htmlProps}
    >
      {children || <SVGXCircle />}
    </StyledXButton>
  );
}

type TXButton = TStyledPrefixAndOmiter<IXButtonProps, 'children'>;

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
    width: ${({ $sizeC }) => ($sizeC ? sizesSettings[$sizeC].deleteButtonSize : sizesSettings.md.deleteButtonSize)};
    height: ${({ $sizeC }) => ($sizeC ? sizesSettings[$sizeC].deleteButtonSize : sizesSettings.md.deleteButtonSize)};
  }
`;
