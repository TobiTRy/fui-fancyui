// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import DropDownSelect from './DropDownSelect';
// Define metadata for the story
const meta = {
  component: DropDownSelect,
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
    values: {
      control: { type: 'array' },
    },
    onChange: {
      control: { type: 'function' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    value: {
      control: { type: 'text' },
    },
    emptySelect: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },

  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof DropDownSelect>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <DropDownSelect {...args} />,
  args: {
    values: ['one', 'two', 'three'],
    emptySelect: false,
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};
