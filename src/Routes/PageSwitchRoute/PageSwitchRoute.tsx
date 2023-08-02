import React from 'react';

import Paginator from '../../Components/UI/Atoms/Paginator/Paginator';
import FancyPageList from '../../Components/UI/Molecules/FancyPageList/FancyPageList';

import { DesignWrapper, DesignArea } from '../DesignWrapper/Wrapper';
export default function PageSwitchRoute() {
  return (
    <DesignWrapper>
      <DesignArea title='Paginator'>
        <FancyPageList itemsPerPage={20} />
      </DesignArea>
    </DesignWrapper>
  );
}
