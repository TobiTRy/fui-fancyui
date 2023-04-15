import React from 'react';
import { IEditBarModal } from './IEditbarModa.model';
import { Wrapper, TitleArea, WrapperContent } from './EditBarModal.style';


export default function EditBarModal(props: IEditBarModal) {
  const { children, scrollable, width, spacingLeftRight } = props;

  return (
    <Wrapper spacingLeftRight={spacingLeftRight} width={width}>
      <TitleArea spacingLeftRight={spacingLeftRight} width={width}>
        
        <h4>Test</h4>
        <i ></i>
      </TitleArea>
      <WrapperContent>

        {children}
      </WrapperContent>
    </Wrapper>
  );
}
