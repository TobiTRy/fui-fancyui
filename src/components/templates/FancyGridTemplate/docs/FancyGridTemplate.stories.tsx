// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyGridTemplate from '../FancyGridTemplate';

// Define metadata for the story
const meta = {
  component: FancyGridTemplate,
  title: 'components/templates/FancyGridTemplate',
  parameters: {
    docs: {
      description: {
        component: 'Layout-Component: The FancyPasswordInput Comonent with surrounding icon, label and underline',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    gridAreas: {
      description:
        'Array of strings defining the grid layout. Each string represents a row in the grid, and each space-separated value within the string defines a grid area.',
      defaultValue: [],
      control: {
        type: 'object',
      },
    },
    gridAreasBreakPoints: {
      description: 'The breakpoints for the grid areas',
      defaultValue: [],
      control: {
        type: 'object',
      },
    },
    gapColumn: {
      description: 'The gap sizeC between columns. Defaults to sm',
      table: {
        defaultValue: { summary: 'sm' },
      },
      control: {
        type: 'number',
      },
    },
    gapRow: {
      description: 'The gap sizeC between rows. Defaults to sm',
      table: {
        defaultValue: { summary: 'sm' },
      },
      control: {
        type: 'number',
      },
    },
    width: {
      description: 'The width of the grid container. Defaults to 100%',
      table: {
        defaultValue: { summary: '100%' },
      },
      control: {
        type: 'text',
      },
    },
    height: {
      description: 'The height of the grid container.',
      table: {
        defaultValue: { summary: '100%' },
      },
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof FancyGridTemplate>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <FancyGridTemplate {...args}></FancyGridTemplate>,
  args: {
    gridAreas: ['header', 'main', 'footer'],
    width: '100%',
    height: '100%',
  },
};
