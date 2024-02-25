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
          'The DropDownSelect component is for displaying a dropdown select, it can be used for selecting a value from a list. <br> <strong>Dumbcomponent</strong> means it hase no state it needs to be controlled by the parent component',
      },
    },
  },

  // Define arguments for the story
  argTypes: {
    values: {
      description:
        'The values to be displayed in the dropdown as an array of strings or an array of objects with a value and key property',
      control: { type: 'array' },
    },
    onChange: {
      description: 'Function to be called when the value is changed',
      control: { type: 'function' },
    },
    placeholder: {
      description: 'The placeholder text to be displayed when no value is selected',
      control: { type: 'text' },
    },
    value: {
      description: 'The value to be displayed in the dropdown selected by default',
      control: { type: 'text' },
    },
    emptySelect: {
      description: 'Is the select empty by default',
      control: { type: 'boolean' },
      defaultValue: {
        summary: true,
      },
    },
    disabled: {
      description: 'Is the select disabled by default',
      control: { type: 'boolean' },
    },
    align: {
      description: 'The alignment of the text in the dropdown',
      control: { type: 'select', options: ['left', 'center'] },
      defaultValue: {
        summary: 'left',
      },
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
    onChange: (e) => {
      console.log('value changed', e);
    },
    placeholder: 'Select a value',
    value: 'one',
  },
};
