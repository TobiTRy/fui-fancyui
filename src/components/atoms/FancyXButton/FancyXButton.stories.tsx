// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyXButton from './FancyXButton';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

// Define metadata for the story
const meta = {
  component: FancyXButton,
  title: 'components/atoms/FancyXButton',
  parameters: {
    docs: {
      description: {
        component: 'FancyXButton is a button with a fancy X in it. It is used to close a modal or a popup.',
      },
    },
  },

  // Define arguments for the story
  argTypes: {
    ...templateThemeType('notTransparent', 'secondary', 0),
    externalStyle: {
      description: 'The external style of the button',
    },
  },

  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof FancyXButton>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <FancyXButton {...args} />,
  args: {
    themeType: 'secondary',
  },
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};
