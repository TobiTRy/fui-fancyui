// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyModal from '../FancyModal';
import { createFancyModalStore } from '../createFancyModalStore';
import { FancyButton } from '../../FancyButton';
import { TModal } from '../../../molecules/Modal';
import { FancyTextInput } from '../../FancyTextInput';
import { TFancyModal } from '@/components/organisms/FancyModal';

// Define metadata for the story
const meta = {
  component: HelperComponent,
  title: 'components/organisms/FancyModal',
  parameters: {
    docs: {
      description: {
        component:
          'FancyModal is a React component designed to manage and display modals in a flexible and efficient manner. It utilizes a global state management solution, provided by Zustand, to handle the visibility and content of modals across the application. The component leverages a FancyPortal to render modals outside of the main app container, which helps in avoiding common styling and event bubbling issues. This setup allows for a clean and isolated modal presentation, with support for dynamic content and configuration.',
      },
      story: {
        height: '300px',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    appendToDomID: {
      description: 'The ID of the DOM element to which the modal should be appended.',
      control: {
        type: 'text',
      },
    },
    modals: {
      description: 'An array of modals to be displayed by the FancyModal component.',
      control: {
        type: 'object',
      },
    },
    closeModal: {
      description: 'A function to close the modal with the specified ID.',
      control: {
        type: 'function',
      },
    },
  },
  // Add tags to the story
} satisfies Meta<TFancyModal>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

const useFancyModalStore = createFancyModalStore();

function HelperComponent(props: React.ComponentProps<typeof FancyModal> & Omit<TModal, 'onClose' | 'isOpen'>) {
  const { appendToDomID, children, ...configProps } = props;
  const modals = useFancyModalStore((state) => state.modals);
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
      <FancyModal appendToDomID="modal" modals={modals} closeModal={closeModal} />
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
    modals: [],
    appendToDomID: '',
    children: <></>,
    closeModal: () => {},
  },
};
