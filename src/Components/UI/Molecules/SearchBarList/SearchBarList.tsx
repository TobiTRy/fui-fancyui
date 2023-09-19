import React from 'react';
import { styled } from 'styled-components';
import FancyCard from '../../Atoms/FancyCard/FancyCard';

import { borderRadius } from '../../Design/design';
import themeStore from '../../Design/color/themeStore';

// Styled component for the search bar list
const StyledSearchBarList = styled.div`
  border-radius: ${borderRadius.xl};
  z-index: 100;
`;

// Styled component for the inner card of the search bar list
const InnerCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
`;

// Props for the SearchBarList component
interface ISearchBarList {
  isActive?: boolean;
  children?: React.ReactNode;
  alignTop?: string;
}
// The SearchBarList component
export default function SearchBarList(props: ISearchBarList) {
  const { isActive, children } = props;
  const theme = themeStore((state) => state.theme);

  return (
    <StyledSearchBarList>
      {/* If the search bar list is active, display the list */}
      {isActive && (
        <FancyCard backgroundColor={theme.primary[2]} radius="xxl">
          <InnerCard>
            {/* If there are items to display, display them */}
            {children && <div>{children}</div>}
          </InnerCard>
        </FancyCard>
      )}
    </StyledSearchBarList>
  );
}
