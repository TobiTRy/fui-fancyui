import React, { ReactNode, useEffect, useState } from 'react';

import SimpleDialog from '../../../Atoms/SimpleDialog/SimpleDialog';
import BackDrop from '../../../Atoms/BackDrop/BackDrop';
import { TThemeTypes } from '@/Components/UI/Interface/TUiColors';
import { TLayer } from '@/Components/UI/Interface/TLayer';

// --------------------------------------------------------------------------- //
// ------  The main Modal Component to comstomize the Head/Bottomline  ------- //
// --------------------------------------------------------------------------- //
export interface IModal {
  id?: string;
  children?: ReactNode;
  isOpen: boolean;
  onClose?: (id: string) => void;
  isCloseable?: boolean;
  backDrop?: boolean;
  themeType?: TThemeTypes;
  layer?: TLayer;
}
export default function Modal(props: IModal) {
  const { id, children, isOpen, onClose, isCloseable, themeType, layer, backDrop = true } = props;
  const [modalVisible, setModalVisible] = useState(false);

  // close the modal when the user clicks on the backdrop
  const closeModalHanlder = () => {
    if (isCloseable === false) return;
    //if a components needs controle from outside
    if (onClose && id) onClose(id);
    setModalVisible(false);
  };

  useEffect(() => {
    if (isOpen) setModalVisible(true);
    else setModalVisible(false);
  }, [isOpen]);

  return (
    <>
      <SimpleDialog isOpen={modalVisible} themeType={themeType} layer={layer}>
        {children}
      </SimpleDialog>
      {backDrop && <BackDrop isOpen={modalVisible} onClick={closeModalHanlder} />}
    </>
  );
}
