import React from 'react';
import { sizes } from '@/components/molecules/Chip/sizeSettings';
import { TTheme } from '@/interface/TTheme';
import { styled } from 'styled-components';
import { SVGXCircle } from '@/components/icons/SVGXCircle';
import RawButton from '@/components/atoms/RawButton/RawButton';

type IXButtonProps = {
  size?: keyof typeof sizes;
  children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
export default function ChipXButton(props: IXButtonProps) {
  const { size, onClick, children, 'aria-label': ariaLabel, ...htmlProps } = props;

  return (
    <StyledXButton
      aria-label={ariaLabel || 'delete'}
      $size={size}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        onClick;
      }}
      {...htmlProps}
    >
      {children || <SVGXCircle />}
    </StyledXButton>
  );
}

interface IXButton {
  $size?: keyof typeof sizes;
  theme: TTheme;
}
export const StyledXButton = styled(RawButton)<IXButton>`
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: inherit;
  background-color: transparent;
  padding: 0;
  line-height: 1;
  display: flex;
  align-items: center;

  svg {
    width: ${({ $size }) => ($size ? sizes[$size].deleteButtonSize : sizes.md.deleteButtonSize)};
    height: ${({ $size }) => ($size ? sizes[$size].deleteButtonSize : sizes.md.deleteButtonSize)};
  }
`;
