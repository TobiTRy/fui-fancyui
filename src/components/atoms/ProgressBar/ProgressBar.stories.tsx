// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import ProgressBar from './ProgressBar';

// Define metadata for the story
const meta = {
  component: ProgressBar,
  parameters: {
    docs: {
      description: {
        component:
          'The ProgressBar is a simple component to display the progress. <br> - It has a maxValue prop to define the max value of the progress bar <br> - It has a progress prop to define the progress of the progress bar <br> - It has a themeType prop to define the theme type of the progress bar <br> - It has a layer prop to define the layer of the progress bar',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    maxValue: {
      description: 'Define the max value of the progress bar',
      control: {
        type: 'number',
      },
    },
    progress: {
      description: 'Define the progress of the progress bar',
      control: {
        type: 'number',
      },
    },
    themeType: {
      description: 'Define the theme type of the progress bar',
      control: {
        type: 'select',
      },
      options: ['primary', 'secondary', 'accent'],
    },
    layer: {
      description: 'Define the layer of the progress bar',
      control: {
        type: 'range',
        min: 0,
        max: 9,
        step: 1,
      },
    },
  },

  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof ProgressBar>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <ProgressBar {...args} />,
  args: {
    maxValue: 100,
    progress: 50,
    themeType: 'secondary',
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
