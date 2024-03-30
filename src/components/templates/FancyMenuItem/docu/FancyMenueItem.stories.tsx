// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyMenuItem from '../FancyMenuItem';

// Define metadata for the story
const meta = {
  component: FancyMenuItem,
  title: 'components/templates/FancyMenuItem',
  parameters: {
    docs: {
      description: {
        component:
          'The FancyMenuItem component is designed to provide a template for menu items within an application, combining text labels and icons for a visually appealing presentation. It utilizes other smaller components, such as MenuItem and FancyContent, to create a cohesive item that can be customized with different sizes, icons, and labels.',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    label: {
      description: 'The label of the item',
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: 'Logout' },
      },
    },
    as: {
      description: 'The as of the item',
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: 'button' },
      },
    },
    icon: {
      description: 'The icon of the item',
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: '' },
      },
    },
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
} satisfies Meta<typeof FancyMenuItem>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <FancyMenuItem {...args} />,
  args: {
    icon: '👋',
    label: 'Logout',
  },
};
