// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancySwipeUpModal from './FancySwipeUpModal';
import { FancyButton } from '../../Molecules/FancyButton';

import { useFancySwipeUpModalStore } from './FancySwipeUpModal.state';


// Define metadata for the story
const meta = {
  component: FancySwipeUpModal,
  parameters: {
    docs: {
      description: {
        component: 'Dumb-Comonent: The FancyPasswordInput Comonent with surrounding icon, label and underline',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    layer: {
      description: 'The layer of the modal',
      defaultValue: 0,
      control: {
        type: 'range',
        min: 0,
        max: 10,
        step: 1,
      },
    },
    themeType: {
      description: 'The theme of the modal',
      defaultValue: 'primary',
      control: {
        type: 'select',
      },
    },
    appendToDomID: {
      description: 'The id of the dom element to append the modal to',
      defaultValue: 'root',
      control: {
        type: 'text',
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

const handleClick = () => {
  useFancySwipeUpModalStore.getState().openSwipeUpModal({ content: <p>Hi</p> },'modal')
}

// Define the primary story
export const Primary: Story = {
  render: (args) => <div id='modal'>
  <FancySwipeUpModal {...args} />
    <FancyButton label='Open Modal' onClick={handleClick}/>
  </div>,
  args: {


  },
};
