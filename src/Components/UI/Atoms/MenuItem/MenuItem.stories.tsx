// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import MenueItem from './MenueItem';

// Define metadata for the story
const meta = {
  component: MenueItem,
  parameters: {
    docs: {
      description: {
        component:
          'Dumb-Component: The MenueItem is only a Box with some styles you can use it to build your own MenueList or something else',
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
} satisfies Meta<typeof MenueItem>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => (
    <MenueItem {...args}>
      <span>Some Content</span>
      {args.children}
    </MenueItem>
  ),
  args: {},
};
