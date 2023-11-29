import React from 'react';
import { IEditBarModal } from './IEditbarModal.model';
import { Wrapper, WrapperContent } from './EditBarModal.style';

import { FancyModalHeadLine } from '../../UI/Molecules/FancyModalHeadLine';

export default function EditBarModal(props: IEditBarModal) {
  const { children, width, spacingLeftRight, title } = props;

  return (
    <Wrapper $spacingLeftRight={spacingLeftRight} $width={width}>
      <FancyModalHeadLine title={title} />
      <WrapperContent>{children}</WrapperContent>
    </Wrapper>
  );
}
