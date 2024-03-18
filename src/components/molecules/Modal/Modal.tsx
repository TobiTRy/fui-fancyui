import { useEffect, useState } from 'react';

import { BackDrop } from '@/components/atoms/BackDrop';
import { SimpleDialog } from '@/components/atoms/SimpleDialog';
import { TModalWithHTMLAttributes } from './TModal.model';

// ----------------------------- ---------------------------------------------- //
// ------  The main Modal Component to comstomize the Head/Bottomline  ------- //
// --------------------------------------------------------------------------- //
export default function Modal(props: TModalWithHTMLAttributes) {
  const { id, children, isOpen, onClose, isCloseable, themeType, layer, backDrop = true, ...htmlProps } = props;
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
      <SimpleDialog isOpen={modalVisible} themeType={themeType} layer={layer} {...htmlProps}>
        {children}
      </SimpleDialog>
      {backDrop && <BackDrop isOpen={modalVisible} onClick={closeModalHanlder} />}
    </>
  );
}
