import { Modal } from '@/components/molecules/Modal';
import { FancyPortal } from '@/components/shared/FancyPortal';

import { TFancyModal } from './TFancyModal.modal';

// --------------------------------------------------------------------------- //
// ----------------- The modalModule to build up a Moadal  ------------------- //
// --------------------------------------------------------------------------- //
export default function FancyModal({ appendToDomID, modals, closeModal }: TFancyModal) {
  return (
    <>
      {/* ----- The FancModal Ports the Modal out of the root div in the spearte "modal" div ----- */}
      <FancyPortal appendToID={appendToDomID}>
        {modals?.map((modal, key) => (
          <Modal key={key} isOpen={modal.status === 'open'} onClose={() => closeModal(modal.id)} {...modal.config}>
            {modal.children}
          </Modal>
        ))}
      </FancyPortal>
    </>
  );
}
