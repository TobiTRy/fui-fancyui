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
  text?: string;
  icon?: React.ReactNode;
  bold?: boolean;
  size?: 'sm' | 'md' | 'lg';
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  flexJustify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  flexAlign?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
}

// --------------------------------------------------------------------------- //
// ------- The conent Components handles the Content of The componets -------- //
// -------------------like for a button or chip etc. ------------------------ //
export default function FancyContent(props: IFancyContentProps) {
  const { text, icon, flexDirection, flexAlign, size, bold = true } = props;
  return (
    <>
      {text && (
        <Wrapper flexAlign={flexAlign} flexDirection={flexDirection}>
          {icon && (
            <FancySVGAtom size={size} externalStyle={{ flexShrink: '0' }} isPassive>
              {icon}
            </FancySVGAtom>
          )}
          {text && (
            <Typography variant={sizes[size || 'sm'].fontSize} weight={bold ? 'bold' : 'normal'} type="button">
              {text}
            </Typography>
          )}
        </Wrapper>
      )}
      {(icon && !text) && icon}
    </>
  );
}