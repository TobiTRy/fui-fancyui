import { styled } from 'styled-components';

import { arrayToCssValues } from '@/design/designFunctions/arrayToCssValues';
import {
  TPaddingContainerFullProps,
  TSpacingContainer,
} from '@/components/atoms/SpacingContainer/SpacingContainer.model';
import IStyledPrefixAndPicker from '@/interface/IStyledPrefixAndPicker';

export default function SpacingContainer(props: TPaddingContainerFullProps) {
  const { children, padding, margin, ...htmlProps } = props;

  return (
    <StyledSpacingsContainer $padding={padding} $margin={margin} {...htmlProps}>
      {children}
    </StyledSpacingsContainer>
  );
}

const StyledSpacingsContainer = styled.div<IStyledPrefixAndPicker<TSpacingContainer>>`
  padding: ${({ $padding }) => $padding && arrayToCssValues($padding)};
  margin: ${({ $margin }) => $margin && arrayToCssValues($margin)};
`;
