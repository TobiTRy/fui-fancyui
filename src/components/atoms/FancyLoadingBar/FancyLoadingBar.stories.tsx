// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyLoadingBar from './FancyLoadingBar';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';
// Define metadata for the story
const meta = {
  component: FancyLoadingBar,
  title: 'components/atoms/FancyLoadingBar',
  parameters: {
    docs: {
      description: {
        component: 'A Loadingbar that indicates loading.',
      },
    },
  },

  // Define arguments for the story
  argTypes: {
    ...templateThemeType('notTransparent', 'accent', 0),
    externalStyle: {
      description: 'Allows for custom CSS to be applied directly to the loading bar.',
      control: {
        type: 'object',
      },
    },
  },

  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof FancyLoadingBar>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <FancyLoadingBar {...args} />,
  args: {
    themeType: 'accent',
    layer: 0,
    externalStyle: {},
  },
};
