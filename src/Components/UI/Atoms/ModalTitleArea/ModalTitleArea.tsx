import React from 'react';
import { TitleArea } from './ModalTitleArea.style';


// --------------------------------------------------------------------------- //
// ----------------- The Header component for the Modals --------------------- //
// --------------------------------------------------------------------------- //
interface IModalTitleArea {
  width?: string;
  spacingLeftRight?: string;
  title?: string;
}
export default function ModalTitleArea(props: IModalTitleArea) {
  const { title } = props;

  return (
    <TitleArea>
      {title && <h4>{title}</h4>}
      <i></i>
    </TitleArea>
  );
}
