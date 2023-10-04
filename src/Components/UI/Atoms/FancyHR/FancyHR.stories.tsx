// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import { FancyHR } from './FancyHR';
// Define metadata for the story
const meta = {
  component: FancyHR,

  parameters: {
    docs: {
      description: {
        component:
          'The FancyCard component is for displaying a card that can fill with somthing, it can be used for displaying content in a card <br> - height: the height of the card <br> - width: the width of the card <br> - themeType: the theme type of the card <br> - layer: the layer of the card <br> - textLayer: the layer of the text <br> - roundedEdges: the rounded edges of the card <br> - shadow: is the card shadowed',
      },
    },
  },

  // Define arguments for the story
  argTypes: {
    $themeType: {
      control: { type: 'select'},
      options: ['primary', 'secondary', 'accent'],
    },
    $layer: {
      control: { type: 'range', min: 0, max: 10, step: 1 },
    },
  },

  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof FancyHR>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <FancyHR {...args} />,
  args: {
    $themeType: 'accent',
    $layer: 0,
  },
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};
