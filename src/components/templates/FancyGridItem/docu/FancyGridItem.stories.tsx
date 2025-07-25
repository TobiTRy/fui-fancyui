// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyGridItem from '../FancyGridItem';
import { FancyButton } from '../../../organisms/FancyButton';

// Define metadata for the story
const meta = {
  component: FancyGridItem,
  title: 'components/templates/FancyGridItem',
  parameters: {
    docs: {
      description: {
        component: 'Layout-Component: The FancyPasswordInput Comonent with surrounding icon, label and underline',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    gridSpace: {
      description: 'The space wich the item should take in the grid',
      defaultValue: '12',
      control: {
        type: 'number',
      },
    },
    breakpoints: {
      description: 'The breakpoints for the grid',
      defaultValue: [],
      control: {
        type: 'object',
      },
    },
    gridColumn: {
      description: 'The column wich the item should take in the grid',
      control: {
        type: 'string',
      },
    },
    gridRow: {
      description: 'The row wich the item should take in the grid',
      control: {
        type: 'string',
      },
    },
  },
} satisfies Meta<typeof FancyGridItem>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => (
    <FancyGridItem {...args}>
      <FancyButton label="Ji" wide />
    </FancyGridItem>
  ),
  args: {
    gridSpace: 6,
    gridColumn: '1 / 3',
    gridRow: '1 / 2',
    breakpoints: [{ breakpoint: '500px', gridSize: 6 }],
  },
};
