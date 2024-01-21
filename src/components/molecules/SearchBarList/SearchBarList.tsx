import React from 'react';

import { Card } from '@/components/molecules/Card';
import { TLayer } from '@/types/TLayer';

import { TThemeTypesNotTransparent } from '@/types/TThemeTypesNotTransparent';
import { InnerCard, StyledSearchBarList } from './SearchBarList.style';
import { css } from 'styled-components';

// Props for the SearchBarList component
interface TSearchBarList {
  isActive?: boolean;
  children?: React.ReactNode;
  themeType?: TThemeTypesNotTransparent;
  layer?: TLayer;
}
// The SearchBarList component
export default function SearchBarList(props: TSearchBarList) {
  const { isActive, children, themeType, layer } = props;

  return (
    <StyledSearchBarList>
      {/* If the search bar list is active, display the list */}

      <InnerCard>
        {/* If there are items to display, display them */}
        {children && <div>{children}</div>}
      </InnerCard>
    </StyledSearchBarList>
  );
}
