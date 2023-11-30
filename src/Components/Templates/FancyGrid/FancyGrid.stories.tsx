// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyGrid from './FancyGrid';
import { FancyButton } from '../../organisms/FancyButton';

// Define metadata for the story
const meta = {
  component: FancyGrid,
  parameters: {
    docs: {
      description: {
        component: 'Layout-Component: The FancyPasswordInput Comonent with surrounding icon, label and underline',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    grid: {
      description: 'The value of the input',
      defaultValue: '12',
      control: {
        type: 'number',
      },
    },
    gap: {
      description: 'The layer of the modal',
      defaultValue: '0',
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof FancyGrid>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => (
    <FancyGrid {...args}>
      <FancyGrid.Item gridSpace={6}>
        <FancyButton label="Ji" wide />
      </FancyGrid.Item>
      <FancyGrid.Item gridSpace={6}>
        <FancyButton label="Ji" wide />
      </FancyGrid.Item>
      <FancyGrid.Item gridSpace={12}>
        <FancyButton label="Ji" wide />
      </FancyGrid.Item>
      <FancyGrid.Item gridSpace={4}>
        <FancyButton label="Ji" wide />
      </FancyGrid.Item>
      <FancyGrid.Item gridSpace={4}>
        <FancyButton label="Ji" wide />
      </FancyGrid.Item>
      <FancyGrid.Item gridSpace={4}>
        <FancyButton label="Ji" wide />
      </FancyGrid.Item>
    </FancyGrid>
  ),
  args: {
    grid: 12,
    gap: '12px',
  },
};
