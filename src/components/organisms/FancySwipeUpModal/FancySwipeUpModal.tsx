'use client';

import { SwipeUpModal } from '@/components/molecules/SwipeUpModal';
import { FancyPortal } from '@/components/shared/FancyPortal';

import { TFancySwipeUpModal, TModalSettings } from '@/components/organisms/FancySwipeUpModal';

// --------------------------------------------------------------------------- //
// ----------- The main FancySwipeUpModal to handle all everything ----------- //
// --------------------------------------------------------------------------- //
interface IFancySwipeUpModal {
  appendToDomID?: string;
  modals: TFancySwipeUpModal[];
  modalConfig?: TModalSettings;
  closeModal: (id: string) => void;
}
export default function FancySwipeUpModal({ appendToDomID, modals, modalConfig, closeModal }: IFancySwipeUpModal) {
  /* ----- The FancModal Ports the Modal out of the root div in the spearte "modal" div ----- */
  return (
    <FancyPortal appendToID={appendToDomID}>
      {/* The Mobile Modal Component  */}
      {modals?.map((modal, key) => (
        <SwipeUpModal
          key={key}
          {...modalConfig}
          {...modal.config}
          onClose={() => closeModal(modal.id)}
          isOpen={modal.status === 'open'}
        >
          {/* render the content of the modal  */}
          {modal.children}
        </SwipeUpModal>
      ))}
    </FancyPortal>
  );
}
