'use client';

import { Modal } from '@/components/molecules/Modal';
import { FancyPortal } from '@/components/shared/FancyPortal';

import { TFancyModal } from './TFancyModal.modal';

// --------------------------------------------------------------------------- //
// ----------------- The modalModule to build up a Moadal  ------------------- //
// --------------------------------------------------------------------------- //
export default function FancyModal(props: TFancyModal) {
  const { appendToDomID, modals, closeModal, externalStyle, zIndex, ...htmlProps } = props;

  /* ----- The FancModal Ports the Modal out of the root div in the spearte "modal" div ----- */
  return (
    <FancyPortal appendToID={appendToDomID}>
      {modals?.map((modal) => (
        <Modal
          key={modal.id}
          id={modal.id}
          isOpen={modal.status === 'open'}
          onClose={() => closeModal(modal.id)}
          zIndex={zIndex}
          externalStyle={externalStyle}
          {...htmlProps}
          {...modal.config}
        >
          {modal.children}
        </Modal>
      ))}
    </FancyPortal>
  );
}
