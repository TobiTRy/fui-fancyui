// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import MenuList from './MenuList';

// Define metadata for the story
const meta = {
  title: 'components/ui/Atoms/MenuList',
  component: MenuList,
  parameters: {
    docs: {
      description: {
        component: 'Template: The FancyMenueItem is a template for a finished Item it used by the FancyMenuList',
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
} satisfies Meta<typeof MenuList>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => (
    <MenuList {...args}>
      <p>Some Content</p>
      {args.children}
    </MenuList>
  ),
  args: {},
};
