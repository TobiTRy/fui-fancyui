import React, { ReactNode, useEffect, useState } from 'react';

import SimpleDialog from '../../Atoms/SimpleDialog/SimpleDialog';
import BackDrop from '../../Atoms/BackDrop/BackDrop';
import { ModalStatus } from '../../Interface/ModalStatus';
import { TUiColorsType } from '../../Design/color/designColor';
import { TLayer } from '../../Design/color/generateColorSteps';

// --------------------------------------------------------------------------- //
// ------  The main Modal Component to comstomize the Head/Bottomline  ------- //
// --------------------------------------------------------------------------- //
interface IModal {
  id?: string;
  children?: ReactNode;
  status: ModalStatus;
  closeModal?: (id: string) => void;
  themeType?: keyof TUiColorsType;
  layer?: TLayer;
}
export default function Modal({ children, closeModal, id, status, themeType, layer }: IModal) {
  const [isOpen, setOpen] = useState(false);

  const closeModalHanlder = () => {
    setOpen(false);
    //if a components needs controle from outside
    if (closeModal && id) closeModal(id);
  };

  useEffect(() => {
    switch (status) {
      case ModalStatus.Open:
        setOpen(true);
        break;
      case ModalStatus.Closing:
        setOpen(false);
        break;
    }
  }, [status]);

  return (
    <>
      <SimpleDialog isOpen={isOpen} themeType={themeType} layer={layer}>{children}</SimpleDialog>
      <BackDrop isOpen={isOpen} onClick={closeModalHanlder} />
    </>
  );
};

