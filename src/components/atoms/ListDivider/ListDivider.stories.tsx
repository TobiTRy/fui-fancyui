// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import ListDivider from './ListDivider';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

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
    ...templateThemeType('notTransparent', 'primary', 3),
    label: {
      description: 'The label to be displayed on the divider',
      control: { type: 'text' },
    },
    textAlignment: {
      description: 'The text alignment of the label',
      control: { type: 'select' },
      defaultValue: {
        summary: 'center',
      },
      options: ['left', 'center', 'right'],
    },
    noLine: {
      description: 'If true, the line will not be displayed',
      control: { type: 'boolean' },
      defaultValue: {
        summary: false,
      },
    },
    fontWeight: {
      description: 'The font weight of the label',
      control: { type: 'text' },
      defaultValue: {
        summary: undefined,
      },
    },
    sizeC: {
      description: 'The size of the divider',
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      defaultValue: {
        summary: 'md',
      },
    },
    icon: {
      description: 'The icon to be displayed on the divider',
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
