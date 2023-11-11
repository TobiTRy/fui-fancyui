// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyGridItem from './FancyGridItem';
import { FancyButton } from '../../../Organisms/FancyButton';

// Define metadata for the story
const meta = {
  component: FancyGridItem,
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
  },
};
