// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import ListDivider from './ListDivider';

// Define metadata for the story
const meta = {
  component: ListDivider,
  parameters: {
    docs: {
      description: {
        component: 'Dumb-Component: Its a Divider that displays only a line or line with informations',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    themeType: {
      description: 'The theme of the input',
      control: {
        type: 'select',
      },
      defaultValue: {
        summary: 'primary',
      },
    },
    layer: {
      description: 'The layer of the button hover effect',
      control: {
        type: 'range',
        min: 1,
        max: 10,
        step: 1,
      },
      defaultValue: {
        summary: '3',
      },
    },
  },
  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof ListDivider>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <ListDivider {...args} />,
  args: {},
};
export const WithText: Story = {
  render: (args) => <ListDivider {...args} />,
  args: {
    label: 'Some Text',
  },
};
