// Import necessary dependencies
import React from 'react';
import Typography, { TypographyList } from '../../Atoms/Typography/Typography';
import FancySVGAtom from '../../Atoms/FancySVGAtom/FancySVGAtom';
import styled from 'styled-components';
import { spacingPx } from '../../Design/design';

// Define the sizes for the FancyContent component
const sizes = {
  sm: {
    fontSize: 'smText' as keyof typeof TypographyList,
    padding: spacingPx.xs,
  },
  md: {
    fontSize: 'content' as keyof typeof TypographyList,
    padding: spacingPx.sm,
  },
  lg: {
    fontSize: 'button' as keyof typeof TypographyList,
    padding: spacingPx.md,
  },
};

// Define the types for the Wrapper component
type TWrapper = Pick<IFancyContentProps, 'flexDirection' | 'flexAlign' | 'flexJustify'>;

// Define the Wrapper component
const Wrapper = styled.span<TWrapper>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  justify-content: ${({ flexJustify }) => flexJustify || 'center'};
  align-items: ${({ flexAlign }) => flexAlign || 'center'};
  gap: ${spacingPx.xs};
`;

// Define the props for the FancyContent component
interface IFancyContentProps {
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  flexJustify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  flexAlign?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  children?: React.ReactNode;
}

// --------------------------------------------------------------------------- //
// ------- The conent Components handles the Content of The componets -------- //
// -------------------like for a button or chip etc. ------------------------ //
export default function FancyContent2(props: IFancyContentProps) {
  const { children, flexAlign, flexDirection } = props;
  let hasIcon = false;
  let hasText = false;

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child) && typeof child.type === 'function') {
      if (child.type.name === 'FancyContentIcon') {
        hasIcon = true;
      } else if (child.type.name === 'FancyContentText') {
        hasText = true;
      }
    }
  });

  return (
    <>
      {hasIcon && !hasText ? (
        children
      ) : (
        <Wrapper flexAlign={flexAlign} flexDirection={flexDirection}>
          {children}
        </Wrapper>
      )}
    </>
  );
}


interface IFancyContentIconProps {
  icon?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}
FancyContent2.Icon = function FancyContentIcon(props: IFancyContentIconProps) {
  const { icon, size } = props;
  return (
    <FancySVGAtom size={size} externalStyle={{ flexShrink: '0' }} isPassive>
      {icon}
    </FancySVGAtom>
  );
};


interface IFancyContentTextProps {
  text?: string;
  bold?: boolean;
  size?: 'sm' | 'md' | 'lg';
}
FancyContent2.Text = function FancyContentText(props: IFancyContentTextProps) {
  const { text, size, bold = true } = props;
  return (
    <Typography variant={sizes[size || 'sm'].fontSize} weight={bold ? 'bold' : 'normal'} type="button">
      {text}
    </Typography>
  );
};
