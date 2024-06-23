import { createFancyModalStore } from '../../components/organisms/FancyModal/createFancyModalStore';
import FancyButton from '../../components/organisms/FancyButton/FancyButton';
import { FancyModalHeadLine } from '@/components/molecules/FancyModalHeadLine';
import { Typography } from '@/components/atoms/Typography';

// eslint-disable-next-line react-refresh/only-export-components
export const useFancyModalStore = createFancyModalStore();

export default function ModalRoute() {
  const createModal = useFancyModalStore((state) => state.openModal);
  const closeModal = useFancyModalStore((state) => state.closeModal);

  const handleModalCreation = () => {
    createModal(
      'hi',
      <div>
        <FancyModalHeadLine
          onXButtonClick={() => closeModal('hi')}
          title={'Test'}
          subTitle={<Typography variant="bodytextSm">Test</Typography>}
        />
        <FancyButton />
      </div>,
      { isCloseable: true }
    );
  };
  return (
    <section>
      <FancyButton onClick={handleModalCreation} sizeC="sm" label="open modal"></FancyButton>
      <FancyButton onClick={handleModalCreation} sizeC="md" label="open modal"></FancyButton>
      <FancyButton onClick={handleModalCreation} sizeC="lg" label="open modal"></FancyButton>
    </section>
  );
}
