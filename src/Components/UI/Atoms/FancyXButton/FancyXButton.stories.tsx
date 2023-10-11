// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyXButton from './FancyXButton';

// Define metadata for the story
const meta = {
  component: FancyXButton,
  parameters: {
    docs: {
      description: {
        component: 'FancyXButton is a button with a fancy X in it. It is used to close a modal or a popup.',
      },
    },
  },

  // Define arguments for the story
  argTypes: {
    themeType: {
      description: 'The themeType is used to define the color of the X in the button. It can be any of the colors defined in the theme or systemMessages.',
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'success', 'warning', 'info', ],
      },
      defaultValue: {
        summary: 'accent',
      }
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
  render: (args) => <FancyXButton {...args}/>,
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
