import React from 'react';
import { styled } from 'styled-components';
import FancyCard from '../../Atoms/FancyCard/FancyCard';

import { borderRadius } from '../../Design/design';
import { TUiColorsType } from '../../Design/color/designColor';
import { TLayer } from '../../Design/color/generateColorSteps';

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
  themeType?: keyof TUiColorsType;
  layer?: TLayer;
}
// The SearchBarList component
export default function SearchBarList(props: ISearchBarList) {
  const { isActive, children, themeType, layer } = props;

  return (
    <StyledSearchBarList>
      {/* If the search bar list is active, display the list */}
      {isActive && (
        <FancyCard themeType={themeType} layer={layer} radius="xxl">
          <InnerCard>
            {/* If there are items to display, display them */}
            {children && <div>{children}</div>}
          </InnerCard>
        </FancyCard>
      )}
    </StyledSearchBarList>
  );
}
