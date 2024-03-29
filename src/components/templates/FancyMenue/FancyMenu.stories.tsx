// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyMenu from './FancyMenu';

// Define metadata for the story
const meta = {
  component: FancyMenu,
  parameters: {
    docs: {
      description: {
        component: 'Template: The FancyMenueItem is a template for a finished Item it used by the FancyMenu',
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
      table: {
        defaultValue: { summary: 'primary' },
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
      table: {
        defaultValue: { summary: '3' },
      },
    },
  },
  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof FancyMenu>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => (
    <FancyMenu {...args}>
      <FancyMenu.Item label="Muuusettingshhh" icon={<>⚙️</>} />
      <FancyMenu.Divider label="Moooiin" />
      <FancyMenu.Item label="Muuusettingshhh" icon={<>⚙️</>} />
      <FancyMenu.Divider />
      <FancyMenu.Item label="Muuusettingshhh" icon={<>⚙️</>} />
      <FancyMenu.Item label="Muuusettingshhh" icon={<>⚙️</>} />
      <FancyMenu.Divider />
      <FancyMenu.Item label="Logout" icon={<>🚪</>} />
    </FancyMenu>
  ),
  args: {},
};
