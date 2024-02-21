import { ElementType } from 'react';
import { styled } from 'styled-components';

import { arrayToCssValues } from '@/design/designFunctions/arrayToCssValues';
import {
  TSpacingsContainerFullProps,
  TSpacingsContainer,
} from '@/components/atoms/SpacingContainer/SpacingsContainer.model';
import { TStyledPrefixAndPicker } from '@/types/TStyledPrefixAndPicker';

export default function SpacingContainer<T extends ElementType = 'div'>(props: TSpacingsContainerFullProps<T>) {
  const { children, padding, margin, as, externalStyle, ...htmlProps } = props;

  return (
    <StyledSpacingsContainer
      as={as ?? 'div'}
      $padding={padding}
      $margin={margin}
      $externalStyle={externalStyle}
      {...htmlProps}
    >
      {children}
    </StyledSpacingsContainer>
  );
}

const StyledSpacingsContainer = styled.div<TStyledPrefixAndPicker<TSpacingsContainer>>`
  display: block;
  padding: ${({ $padding }) => $padding && arrayToCssValues($padding)};
  margin: ${({ $margin }) => $margin && arrayToCssValues($margin)};
  ${({ $externalStyle }) => $externalStyle};
`;
