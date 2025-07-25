// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import AvailableDot from './AvailableDot';

// Define metadata for the story
const meta = {
  component: AvailableDot,
  title: 'components/atoms/AvailableDot',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A little Circle that indicates if something is avilable. <br> - the color changes depending on the $available prop.',
      },
    },
  },

  // Define arguments for the story
  argTypes: {
    $available: {
      options: ['completly', 'partially', 'not', 'transparent'],
      control: { type: 'radio' },
    },
  },

  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof AvailableDot>;

// Export the metadata
export default meta;

// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <AvailableDot {...args} />,
  args: {
    $available: 'completly',
  },
};
