import { ElementType } from 'react';
import { styled } from 'styled-components';

import { arrayToCssValues } from '@/design/designFunctions/arrayToCssValues';
import {
  TPaddingContainerFullProps,
  TSpacingsContainer,
} from '@/components/atoms/SpacingContainer/SpacingsContainer.model';
import IStyledPrefixAndPicker from '@/interface/IStyledPrefixAndPicker';

export default function SpacingContainer<T extends ElementType = 'div'>(props: TPaddingContainerFullProps<T>) {
  const { children, padding, margin, as, ...htmlProps } = props;

  return (
    <StyledSpacingsContainer as={as ?? 'div'} $padding={padding} $margin={margin} {...htmlProps}>
      {children}
    </StyledSpacingsContainer>
  );
}

const StyledSpacingsContainer = styled.div<IStyledPrefixAndPicker<TSpacingsContainer>>`
  display: block;
  padding: ${({ $padding }) => $padding && arrayToCssValues($padding)};
  margin: ${({ $margin }) => $margin && arrayToCssValues($margin)};
`;
