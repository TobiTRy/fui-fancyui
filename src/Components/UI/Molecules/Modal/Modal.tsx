import React, { ReactNode, useEffect, useState } from 'react';

import SimpleDialog from '../../Atoms/SimpleDialog/SimpleDialog';
import BackDrop from '../../Atoms/BackDrop/BackDrop';
import { TUiColorsType } from '../../Design/color/designColor';
import { TLayer } from '../../Design/color/generateColorSteps';

// --------------------------------------------------------------------------- //
// ------  The main Modal Component to comstomize the Head/Bottomline  ------- //
// --------------------------------------------------------------------------- //
interface IModal {
  id?: string;
  children?: ReactNode;
  isOpen: boolean;
  closeModal?: (id: string) => void;
  isCloseable?: boolean;
  themeType?: keyof TUiColorsType;
  layer?: TLayer;
}
export default function Modal(props: IModal) {
  const { id, children, isOpen, closeModal, isCloseable, themeType, layer } = props;
  const [modalVisible, setModalVisible] = useState(false);

  // close the modal when the user clicks on the backdrop
  const closeModalHanlder = () => {
    if (isCloseable === false) return;
    //if a components needs controle from outside
    if (closeModal && id) closeModal(id);
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
      <BackDrop isOpen={modalVisible} onClick={closeModalHanlder} />
    </>
  );
}
