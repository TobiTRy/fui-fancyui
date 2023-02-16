import React from 'react';
import {
  colorPalet,
  uiColors,
  fontSize,
  borderRadius,
  spacing,
} from '../../../Design/design';

import styled, { css } from 'styled-components';

interface IFancyButton {
  size: 'small' | 'medium' | 'large' | 'wide';
  label?: string;
  outlined?: boolean;
  color?: 'light' | 'dark';
  icon?: React.ReactNode;
  align?: 'left' | 'right' | 'center';
  design: 'primary' | 'secondary' | 'accent' | 'transparent';
  onClick?: () => void;
}
//rounded
//outlined
//disabled / hoverd
//icon / only icon / icon left or right side
//only text button
//passiv warn secondary

const alignment = {
  left: 'flex-start',
  right: 'flex-end',
  center: 'center',
};

const padding = {
  small: `${spacing.xs} ${spacing.sm}`,
  medium: `${spacing.sm} ${spacing.lg}`,
  large: `${spacing.md} ${spacing.xl}`,
  wide: `${spacing.md}`,
};

//TODO: Check for optional Values
//TODO: EFFECTS HOVER ETC
//TODO: Alignment
//TODO: ICONS

const BlankButton = styled.button<IFancyButton>`
  display: flex;
  justify-content: center;
  font-family: 'Lato', sans-serif;
  width: ${({ size }) => (size === 'wide' ? '100%' : 'initial')};
  padding: ${({ size }) => padding[size]};
  font-size: ${({ size }) =>
    size === 'wide' ? fontSize.medium : fontSize[size]};
  border-radius: ${({ size }) =>
    size === 'wide' ? borderRadius.large : borderRadius[size]};
  border: none;
  cursor: pointer;
`;

const generateOutlined = (props: IFancyButton) => {
  const { design, color} = props

  return css`
    position: relative;
    background-color: transparent;
    border: 2px solid ${uiColors[design].main};
    color: ${color ? colorPalet[color] : uiColors[design].main};

    &:hover {
      border-color: ${uiColors[design].hover};
      color: ${color ? colorPalet[color] : uiColors[design].hover};
    }
  `;
};

const generateButton = (props: IFancyButton) => {
  const { design, outlined } = props;

  const outlinedStyled = generateOutlined(props)

  return css`
    background-color: ${uiColors[design].main};
    ${outlinedStyled}
  `;
};

const Button = styled.button`
  display: flex;
  justify-content: center;
  font-family: 'Lato', sans-serif;
  width: ${({ size }) => (size === 'wide' ? '100%' : 'initial')};
  padding: ${({ size }) => padding[size]};
  font-size: ${({ size }) =>
    size === 'wide' ? fontSize.medium : fontSize[size]};
  border-radius: ${({ size }) =>
    size === 'wide' ? borderRadius.large : borderRadius[size]};
  border: none;
  cursor: pointer;

  ${(props: IFancyButton) => generateButton(props)}
`;

const NormalButton = styled(BlankButton)`
  background-color: ${({ design }: IFancyButton) => uiColors[design].main};
  color: ${({ design }: IFancyButton) => uiColors[design].contrast};

  &:hover {
    background-color: ${({ design }: IFancyButton) => uiColors[design].hover};
  }
`;

const OutlinedButton = styled(BlankButton)`
  position: relative;
  background-color: transparent;
  border: 2px solid ${({ design }: IFancyButton) => uiColors[design].main};
  color: ${({ design, color }: IFancyButton) =>
    color ? colorPalet[color] : uiColors[design].main};

  &:hover {
    border-color: ${({ design }: IFancyButton) => uiColors[design].hover};
    color: ${({ design, color }: IFancyButton) =>
      color ? colorPalet[color] : uiColors[design].hover};
  }
`;

const paddingFromIcon = {
  small: `${spacing.xs} `,
  medium: `${spacing.sm}`,
  large: `${spacing.sm}`,
  wide: `${spacing.sm}`,
};

function calcPixel(pxInput: string, changeValue: number) {
  return parseInt(pxInput) + changeValue + 'px';
}

const paddingIconButon = {
  small: `${calcPixel(spacing.sm, -4)}`,
  medium: `${calcPixel(spacing.lg, -2)}`,
  large: `${calcPixel(spacing.xl, -5)}`,
  wide: `${calcPixel(spacing.md, -4)}`,
};

const calcIconPaddingAndAlign = ({
  align,
  size,
}: Pick<IFancyButton, 'align' | 'size'>) => {
  if (align === 'right') {
    return {
      'padding-left': paddingFromIcon[size],
      order: 1,
    };
  } else {
    return {
      'padding-right': paddingFromIcon[size],
    };
  }
};

const calcIconButtoonPadding = ({
  align,
  size,
}: Pick<IFancyButton, 'align' | 'size'>) => {
  if (align === 'right') {
    return { 'padding-right': paddingIconButon[size] };
  } else {
    return { 'padding-left': paddingIconButon[size] };
  }
};

const IconButton = styled(BlankButton)`
  ${NormalButton}
  align-items: center;
  justify-content: ${({ align }: IFancyButton) => align && alignment[align]};
  ${({ align, size }: IFancyButton) => calcIconButtoonPadding({ align, size })};

  & i {
    display: flex;
    align-items: center;
    ${({ align, size }: IFancyButton) =>
      calcIconPaddingAndAlign({ align, size })};
  }
`;

const NormalIconButton = styled(NormalButton)`
  ${IconButton}
`;

const OutlinedIconButton = styled(IconButton)`
  ${OutlinedButton}
`;

export default function FancyButton({ label, ...props }: IFancyButton) {
  const outlined = props.outlined;
  const icon = props.icon;
  return (
    <>
      {!outlined && !icon && (
        <NormalButton type="button" {...props}>
          {label}
        </NormalButton>
      )}
      {outlined && !icon && (
        <OutlinedButton type="button" {...props}>
          {label}
        </OutlinedButton>
      )}
      {!outlined && icon && (
        <IconButton type="button" {...props}>
          <i>{icon}</i>
          <span>{label}</span>
        </IconButton>
      )}
      {outlined && icon && (
        <OutlinedIconButton type="button" {...props}>
          <i>{icon}</i>
          <span>{label}</span>
        </OutlinedIconButton>
      )}
      <Button type="button" {...props}>
        ddd
      </Button>
    </>
  );
}
