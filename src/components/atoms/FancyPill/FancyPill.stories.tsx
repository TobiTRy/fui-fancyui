// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyPill from './FancyPill';
// Define metadata for the story
const meta = {
  component: FancyPill,

  parameters: {
    docs: {
      description: {
        component:
          'The FancyPill component is for displaying a pill that can fill with somthing, it can be used for displaying content in a pill <br> - height: the height of the pill <br> - width: the width of the pill <br> - themeType: the theme type of the pill <br> - layer: the layer of the pill <br> - textLayer: the layer of the text <br> - roundedEdges: the rounded edges of the pill <br> - shadow: is the pill shadowed',
      },
    },
  },

  // Define arguments for the story
  argTypes: {
    themeType: {
      description: 'The theme type of the component.',
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'accent', 'neutral'],
      },
    },

    layer: {
      description: 'The layer of the component.',
      control: {
        type: 'range',
        min: 0,
        max: 10,
        step: 1,
      },
    },
    isActive: {
      description: 'Is the component active.',
      control: {
        type: 'boolean',
      },
    },
    isHoverable: {
      description: 'Is the component hoverable.',
      control: {
        type: 'boolean',
      },
    },
    outlined: {
      description: 'Is the component outlined.',
      control: {
        type: 'boolean',
      },
    },
    outlinedBackgroundStrength: {
      description: 'The background strength of the outlined component.',
      control: {
        type: 'range',
        min: 0,
        max: 10,
        step: 1,
      },
    },
    externalStyle: {
      description: 'The external style of the component.',
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof FancyPill>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <FancyPill {...args} />,
  args: {
    children: 'Hiii',
    themeType: 'primary',
    layer: 3,
    isActive: false,
    isHoverable: false,
    outlined: false,
    outlinedBackgroundStrength: 0.5,
    externalStyle: '',
  },
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};
