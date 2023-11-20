// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import EditBarModal from './EditBarModal';
// Define metadata for the story
const meta = {
  component: EditBarModal,
  parameters: {
    docs: {
      description: {
        component:
          'The DropDownSelect component is for displaying a dropdown select, it can be used for selecting a value from a list <br> - values: the values to be displayed in the dropdown <br> - onChange: function to be called when the value is changed <br> - placeholder: the placeholder text to be displayed when no value is selected <br> - value: the value to be displayed <br> - emptySelect: is the select empty <br> - disabled: is the select disabled',
      },
    },
  },

  // Define arguments for the story
  argTypes: {
    scrollable: {
      control: { type: 'boolean' },
    },
    align: {
      control: { type: 'select', options: ['left', 'center', 'right'] },
    },
    title: {
      control: { type: 'text' },
    },
    width: {
      control: { type: 'text' },
    },
    spacingLeftRight: {
      control: { type: 'text' },
    },
  },

  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof EditBarModal>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <EditBarModal {...args} />,
  args: {
    align: 'center',
    title: 'Edit Bar',
    width: '100%',
  },
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};
