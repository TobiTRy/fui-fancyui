// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import { CheckerBoardPattern } from '.';

// Define metadata for the story
const meta = {
  component: CheckerBoardPattern,
  title: 'components/atoms/CheckerBoardPattern',
  parameters: {
    docs: {
      description: {
        component:
          'The CheckerBoardPattern component is a Gradient pattern that can be used as a background for other components.',
      },
    },
  },

  // Define arguments for the story
  argTypes: {
    opacity: {
      description: 'The opacity of the pattern',
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.1,
      },
      table: {
        defaultValue: { summary: 1 },
      },
    },
    color: {
      description: 'The color of the pattern',
      control: {
        type: 'color',
      },
      table: {
        defaultValue: { summary: '#808080' },
      },
    },
    externalStyle: {
      description: 'The external style of the pattern',
      control: {
        type: 'object',
      },
    },
  },
} satisfies Meta<typeof CheckerBoardPattern>;

// Export the metadata
export default meta;

// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <CheckerBoardPattern {...args} />,
  args: {
    opacity: 1,
    color: '#808080',
    externalStyle: {
      display: 'block',
      height: '20px',
    },
  },
};
