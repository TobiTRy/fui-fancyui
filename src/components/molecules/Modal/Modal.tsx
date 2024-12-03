'use client';

import { useEffect, useState } from 'react';

import { BackDrop } from '@/components/atoms/BackDrop';
import { SimpleDialog } from '@/components/atoms/SimpleDialog';
import { TModalWithHTMLAttributes } from './TModal.model';
import { useBodyOverflow } from '@/utils/hooks/useBodyOverflow';
import { CSSObject } from 'styled-components';

// ----------------------------- ---------------------------------------------- //
// ------  The main Modal Component to comstomize the Head/Bottomline  ------- //
// --------------------------------------------------------------------------- //
export default function Modal(props: TModalWithHTMLAttributes) {
  const {
    children,
    isOpen,
    onClose,
    isCloseable = true,
    themeType,
    layer,
    backDrop = true,
    externalStyle,
    zIndex = 100,
    ...htmlProps
  } = props;
  const [modalVisible, setModalVisible] = useState(false);
  useBodyOverflow('hidden');

  // close the modal when the user clicks on the backdrop
  const closeModalHanlder = () => {
    if (!isCloseable) return;
    // enable the scroll on the body when the modal is closed
    //if a components needs controle from outside
    if (onClose) onClose();
    setModalVisible(false);
  };

  useEffect(() => {
    setModalVisible(!!isOpen);
  }, [isOpen]);

  return (
    <>
      <SimpleDialog
        isOpen={modalVisible}
        themeType={themeType}
        layer={layer}
        externalStyle={{
          zIndex: zIndex + 1,
          ...(externalStyle as CSSObject),
        }}
        {...htmlProps}
      >
        {children}
      </SimpleDialog>
      {backDrop && <BackDrop isOpen={modalVisible} externalStyle={{ zIndex: zIndex }} onClick={closeModalHanlder} />}
    </>
  );
}
