// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import ModalTitleArea from './ModalTitleArea';

// Define metadata for the story
const meta = {
  component: ModalTitleArea,
  parameters: {
    docs: {
      description: {
        component:
          'The ModalTitleArea is a simple component to display the title of the modal. <br> - It has a title prop to define the title of the modal <br> - It has a width prop to define the width of the modal <br> - It has a spacingLeftRight prop to define the spacing of the modal',
      },
    },
  },

  // Define arguments for the story
  argTypes: {
    width: {
      control: {
        type: 'text',
      },
    },
    title: {
      control: {
        type: 'text',
      },
    },
  },

  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof ModalTitleArea>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <ModalTitleArea {...args} />,
  args: {
    width: '100%',
    title: 'Modal title',
  },
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};
