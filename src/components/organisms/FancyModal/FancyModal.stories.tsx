// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyModal from './FancyModal';
import { useFancyModalStore } from './FancyModal.state';
import { FancyButton } from '../FancyButton';
import { IModal } from '../../molecules/Modal/Modal';
import { FancyTextInput } from '../FancyTextInput';

// Define metadata for the story
const meta = {
  component: HelperComponent,
  title: 'components/ui/organisms/FancyModal',
  parameters: {
    docs: {
      description: {
        component: 'Smart-Comonent: The FancyModal is a smart component that handles all the logic for the Modal.',
      },
    },
  },
  // Define arguments for the story
  argTypes: {},
  // Add tags to the story
} satisfies Meta<typeof HelperComponent>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

function HelperComponent(props: React.ComponentProps<typeof FancyModal> & Omit<IModal, 'onClose' | 'isOpen'>) {
  const { appendToDomID, children, ...configProps } = props;
  const openModal = useFancyModalStore((state) => state.openModal);
  const closeModal = useFancyModalStore((state) => state.closeModal);

  const openModalHandler = () => {
    openModal(
      appendToDomID || 'modalTest',
      children || (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <FancyTextInput label="Email" />
          <FancyButton onClick={() => closeModal('modalTest')} label="Close Modal"></FancyButton>
        </div>
      ),
      configProps || {
        isCloseAble: false,
      }
    );
  };
  return (
    <>
      <FancyModal appendToDomID="modal" />
      <FancyButton label="Open Modal" onClick={() => openModalHandler()} />
    </>
  );
}

HelperComponent.displayName = 'FancyModal';

// Define the primary story
export const Primary: Story = {
  render: (args) => (
    <>
      <div id="modal"></div>
      <HelperComponent {...args} />
    </>
  ),
  args: {
    appendToDomID: '',
  },
};
