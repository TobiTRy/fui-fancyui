// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancySwipeUpModal from './FancySwipeUpModal';
import { FancyButton } from '../../Molecules/FancyButton';
import React from 'react';

// Define metadata for the story
const meta = {
  component: FancySwipeUpModal,
  parameters: {
    docs: {
      description: {
        component: 'Smart-Comonent: The FancySwipeUpModal is a smart component that handles all the logic for the SwipeUpModal.',
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
      defaultValue: {
        summary: 'body',
      },
    },
    isOpen: {
      description: 'The state of the modal',
      control: {
        type: 'boolean',
      },
      defaultValue: {
        summary: false,
      },
    },
    onClose: {
      description: 'The function to close the modal',
      control: {
        type: 'function',
      },
      defaultValue: {
        summary: '',
      },
    },
    isScalable: {
      description: 'Is the modal scalable by the user',
      control: {
        type: 'boolean',
      },
      defaultValue: {
        summary: true,
      },
    },
    isCloseAble: {
      description: 'Is the modal closeable by the user',
      control: {
        type: 'boolean',
      },
      defaultValue: {
        summary: true,
      },
    },
    themeType: {
      description: 'The theme of the modal',
      control: {
        type: 'select',
      },
      defaultValue: {
        summary: 'primary',
      },
    },
    layer: {
      description: 'The layer of the modal',
      control: {
        type: 'range', min: 0, max: 10, step: 1,
      },
      defaultValue: {
        summary: 0,
      },
    },
  },
  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof FancySwipeUpModal>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;



// eslint-disable-next-line @typescript-eslint/no-explicit-any
function HelperComponent(props: any) {
  const [isVisible, setIsVisible] = React.useState(false);

  const onClose = () => {
    setIsVisible(false);
  };
  return (
    <>
      <FancySwipeUpModal {...props} isOpen={isVisible} onClose={onClose} />
      <FancyButton label="Open Modal" onClick={() => setIsVisible(true)} />
    </>
  );
}

// Define the primary story
export const Primary: Story = {
  render: (args) => (
    <>
      <div id="modal"></div>
      <HelperComponent {...args} />
    </>
  ),
  args: {},
};
