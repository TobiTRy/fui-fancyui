import React from 'react';

import { Card } from '@/components/molecules/Card';
import { TThemeTypes } from '@/types/TThemeTypes';
import { TLayer } from '@/types/TLayer';

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
        <Card themeType={themeType} layer={layer} borderRadius={['xl']}>
          <InnerCard>
            {/* If there are items to display, display them */}
            {children && <div>{children}</div>}
          </InnerCard>
        </Card>
      )}
    </StyledSearchBarList>
  );
}
