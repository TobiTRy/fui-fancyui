// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyCard from './FancyCard';
// Define metadata for the story
const meta = {
  title: 'components/ui/Atoms/FancyCard',
  component: FancyCard,
  
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
    height: {
      control: { type: 'text' },
    },
    width: {
      control: { type: 'text' },
    },
    themeType: {
      control: { type: 'select', options: ['primary', 'secondary', 'accent'] },
    },
    layer: {
      control: { type: 'range', min: 0, max: 10, step: 1 },
    },
    textLayer: {
      control: { type: 'range', min: 0, max: 10, step: 1 },
    },
    roundedEdges: {
      control: { type: 'object' },
    },
    shadow: {
      control: { type: 'boolean' },
    },
  },

  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof FancyCard>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => (
    <FancyCard {...args}>
      <h1>Some Random Content</h1>
    </FancyCard>
  ),
  args: {
    roundedEdges: {
      topLeft: true,
      topRight: true,
      bottomLeft: true,
      bottomRight: true,
    },
    shadow: true,
    themeType: 'primary',
    layer: 3,
    width: '100%',
    height: '100%',
  },
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};
