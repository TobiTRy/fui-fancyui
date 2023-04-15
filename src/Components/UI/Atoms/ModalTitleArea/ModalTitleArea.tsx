import React from 'react';
import { TitleArea } from './ModalTitleArea.style';

interface IModalTitleArea {
  width?: string;
  spacingLeftRight?: string;
  title?: string;
}

export default function ModalTitleArea(props: IModalTitleArea) {
  const { width, title } = props;

  return (
    <TitleArea>
      {title && <h4>{title}</h4>}
      <i></i>
    </TitleArea>
  );
}
