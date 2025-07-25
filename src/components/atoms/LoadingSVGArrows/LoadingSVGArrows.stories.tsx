// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import LoadingSVGArrows from './LoadingSVGArrows';

// Define metadata for the story
const meta = {
  component: LoadingSVGArrows,
  title: 'components/atoms/LoadingSVGArrows',
  parameters: {
    docs: {
      description: {
        component:
          'The LoadingSVGArrows is a simple loading animation with SVG arrows. <br> - It has a isLoading prop to define if the animation is active',
      },
    },
  },

  // Define arguments for the story
  argTypes: {
    isActive: {
      control: {
        type: 'boolean',
      },
    },
    isLoading: {
      control: {
        type: 'boolean',
      },
    },
    themeType: {
      control: {
        type: 'select',
      },
      options: ['primary', 'secondary', 'accent'],
    },
    layer: {
      control: {
        type: 'range',
        min: 0,
        max: 10,
        step: 1,
      },
    },
    sizeC: {
      control: {
        type: 'select',
      },
    },
    systemMessage: {
      type: {
        name: 'string',
        required: false,
      },
      control: {
        type: 'select',
      },
      options: ['error', 'warning', 'success', 'info', undefined],
    },
    isPassive: {
      description:
        'Passive mode is when when the color should adapt from the parent component, otherwise it can used interative with (active, error, colors) ',
      control: {
        type: 'boolean',
      },
    },
  },

  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof LoadingSVGArrows>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <LoadingSVGArrows {...args} />,
  args: {
    isLoading: true,
    isPassive: false,
    themeType: 'accent',
    layer: 1,
  },
};
