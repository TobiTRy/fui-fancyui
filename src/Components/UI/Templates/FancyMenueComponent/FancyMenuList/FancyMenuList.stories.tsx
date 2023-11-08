// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyMenuList from './FancyMenuList';

// Define metadata for the story
const meta = {
  component: FancyMenuList,
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
        type: 'range', min: 1, max: 10, step: 1,
      },
      defaultValue: {
        summary: '3',
      },
    },
  },
  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof FancyMenuList>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <FancyMenuList {...args} >
    <FancyMenuList.Item label="Muuusettingshhh" icon={<>⚙️</>} />
    <FancyMenuList.Divider label='Moooiin'/>
    <FancyMenuList.Item label="Muuusettingshhh" icon={<>⚙️</>} />
    <FancyMenuList.Divider/>
    <FancyMenuList.Item label="Muuusettingshhh" icon={<>⚙️</>} />
    <FancyMenuList.Item label="Muuusettingshhh" icon={<>⚙️</>} />
    <FancyMenuList.Divider />
    <FancyMenuList.Item label="Logout" icon={<>🚪</>} />
  </FancyMenuList>,
  args: {
  },
};
