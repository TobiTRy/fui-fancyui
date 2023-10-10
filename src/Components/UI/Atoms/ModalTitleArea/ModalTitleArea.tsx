import React from 'react';
import { TitleArea } from './ModalTitleArea.style';
import Typography from '../Typography/Typography';


// --------------------------------------------------------------------------- //
// ----------------- The Header component for the Modals --------------------- //
// --------------------------------------------------------------------------- //
interface IModalTitleArea {
  width?: string;
  title?: string;
}
export default function ModalTitleArea(props: IModalTitleArea) {
  const { title } = props;

  return (
    <TitleArea>
      {title && <Typography type='h4' variant='h4'>{title}</Typography>}
      <i></i>
    </TitleArea>
  );
}
