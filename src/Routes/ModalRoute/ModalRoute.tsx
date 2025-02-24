import { createFancyModalStore } from '../../components/organisms/FancyModal/createFancyModalStore';
import FancyButton from '../../components/organisms/FancyButton/FancyButton';
import { FancyModalHeadLine } from '@/components/molecules/FancyModalHeadLine';

// eslint-disable-next-line react-refresh/only-export-components
export const useFancyModalStore = createFancyModalStore();

export default function ModalRoute() {
  const createModal = useFancyModalStore((state) => state.openModal);
  const closeModal = useFancyModalStore((state) => state.closeModal);

  const handleModalCreation = () => {
    createModal({
      id: 'modal',
      header: <FancyModalHeadLine title="Modal Title" />,
      content: (
        <>
          <FancyButton onClick={() => closeModal('modal')} sizeC="sm" label="close modal"></FancyButton>
          <FancyButton onClick={() => closeModal('modal')} sizeC="sm" label="close modal"></FancyButton>
          <FancyButton onClick={() => closeModal('modal')} sizeC="sm" label="close modal"></FancyButton>
          <FancyButton onClick={() => closeModal('modal')} sizeC="sm" label="close modal"></FancyButton>
          <FancyButton onClick={() => closeModal('modal')} sizeC="sm" label="close modal"></FancyButton>
          <FancyButton onClick={() => closeModal('modal')} sizeC="sm" label="close modal"></FancyButton>
          <FancyButton onClick={() => closeModal('modal')} sizeC="sm" label="close modal"></FancyButton>
          <FancyButton onClick={() => closeModal('modal')} sizeC="sm" label="close modal"></FancyButton>
          <FancyButton onClick={() => closeModal('modal')} sizeC="sm" label="close modal"></FancyButton>
          <FancyButton onClick={() => closeModal('modal')} sizeC="sm" label="close modal"></FancyButton>
          <FancyButton onClick={() => closeModal('modal')} sizeC="sm" label="close modal"></FancyButton>
          <FancyButton onClick={() => closeModal('modal')} sizeC="sm" label="close modal"></FancyButton>
          <FancyButton onClick={() => closeModal('modal')} sizeC="sm" label="close modal"></FancyButton>
          <FancyButton onClick={() => closeModal('modal')} sizeC="sm" label="close modal"></FancyButton>
          <FancyButton onClick={() => closeModal('modal')} sizeC="sm" label="close modal"></FancyButton>
          <FancyButton onClick={() => closeModal('modal')} sizeC="sm" label="close modal"></FancyButton>
          <FancyButton onClick={() => closeModal('modal')} sizeC="sm" label="close modal"></FancyButton>
          <FancyButton onClick={() => closeModal('modal')} sizeC="sm" label="close modal"></FancyButton>
          <FancyButton onClick={() => closeModal('modal')} sizeC="sm" label="close modal"></FancyButton>
          <FancyButton onClick={() => closeModal('modal')} sizeC="sm" label="close modal"></FancyButton>
          <FancyButton onClick={() => closeModal('modal')} sizeC="sm" label="close modal"></FancyButton>
        </>
      ),
      footer: (
        <>
          <p>Modal Footer</p>
          <p>Modal Footer</p> <p>Modal Footer</p>
        </>
      ),
    });
  };

  return (
    <section>
      <FancyButton onClick={handleModalCreation} sizeC="sm" label="open modal"></FancyButton>
      <FancyButton onClick={handleModalCreation} sizeC="md" label="open modal"></FancyButton>
      <FancyButton onClick={handleModalCreation} sizeC="lg" label="open modal"></FancyButton>
    </section>
  );
}
