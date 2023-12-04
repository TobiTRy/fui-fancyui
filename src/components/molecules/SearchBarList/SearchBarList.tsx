import React from 'react';

import FancyCard from '../../atoms/FancyCard/FancyCard';
import { TThemeTypes } from '@/interface/TThemeTypes';
import { TLayer } from '@/interface/TLayer';
import { InnerCard, StyledSearchBarList } from './SearchBarList.style';

// Props for the SearchBarList component
interface ISearchBarList {
  isActive?: boolean;
  children?: React.ReactNode;
  themeType?: TThemeTypes;
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
