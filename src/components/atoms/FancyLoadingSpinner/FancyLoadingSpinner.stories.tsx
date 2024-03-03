// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyLoadingSpinner from './FancyLoadingSpinner';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';
// Define metadata for the story
const meta = {
  component: FancyLoadingSpinner,

  parameters: {
    docs: {
      description: {
        component: 'FancyLooadingSpinner that indicates loading and can be dynamicly adjusted in the sizeC.',
      },
    },
  },

  // Define arguments for the story
  argTypes: {
    ...templateThemeType('notTransparent', 'accent', 0),
    sizeC: {
      description: 'The sizeC of the component.',
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'lg', 'xl'],
      },
    },
  },

  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof FancyLoadingSpinner>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <FancyLoadingSpinner {...args} />,
  args: {
    themeType: 'accent',
    sizeC: 'md',
    layer: 0,
  },
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};
