// Import necessary dependencies
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancySwipeUpModal from '../FancySwipeUpModal';
import { FancyButton } from '../../FancyButton';
import { createFancySwipeUpModalStore } from '../createFancySwipeUpModal.state';
import { FancyTextInput } from '../../FancyTextInput';
import { TSwipeUpModal } from '@/components/molecules/SwipeUpModal/TSwipeUpModal.model';

import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

// Define metadata for the story
const meta = {
  component: HelperComponent,
  title: 'components/organisms/FancySwipeUpModal',
  parameters: {
    docs: {
      description: {
        component:
          'The FancySwipeUpModal component provides a dynamic and adaptable modal experience, enhanced with the use of the `createFancySwipeUpStore` for simplified integration into applications. This update eliminates the need for manual prop configurations, allowing developers to easily create modals with various features and adaptability options.',
      },
      story: {
        height: '300px',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    appendToDomID: {
      description: 'The ID of the DOM element to append the modal to',
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: 'body' },
      },
    },
    isOpen: {
      description: 'The state of the modal',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    isScalable: {
      description: 'Is the modal scalable by the user',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: true },
      },
    },
    isCloseAble: {
      description: 'Is the modal closeable by the user',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: true },
      },
    },
    modals: {
      description:
        'The array of modals to display should come from the store `const useFancySwipeUpModalStore  = createFancySwipeUpModalStore()ƒ`',
      control: {
        type: 'object',
      },
      table: {
        defaultValue: { summary: [] },
      },
    },
    closeModal: {
      description:
        'The function to close the modal should come from the store `const useFancySwipeUpModalStore  = createFancySwipeUpModalStore()ƒ`',
      control: {
        type: 'function',
      },
    },
    ...templateThemeType('mainThemeTypes', 'primary', 1),
  },
  // Add tags to the story
} satisfies Meta<typeof HelperComponent>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

const useFancySwipeUpModalStore = createFancySwipeUpModalStore();

function HelperComponent(
  props: Partial<React.ComponentProps<typeof FancySwipeUpModal>> & Omit<TSwipeUpModal, 'onClose'>
) {
  const { appendToDomID, children, ...configProps } = props;
  const modals = useFancySwipeUpModalStore((state) => state.modals);
  const openModal = useFancySwipeUpModalStore((state) => state.openSwipeUpModal);
  const closeModal = useFancySwipeUpModalStore((state) => state.closeSwipeUpModal);

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
        isScalable: true,
      }
    );
  };

  return (
    <>
      <FancySwipeUpModal appendToDomID="modal" modals={modals} closeModal={closeModal} />
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
    layer: 1,
    themeType: 'primary',
    isCloseAble: true,
  },
};
