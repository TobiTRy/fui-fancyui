// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import WeekDays from './WeekDays';

// Define metadata for the story
const meta = {
  component: WeekDays,
  parameters: {
    docs: {
      description: {
        component:
          'The WeekDays component that only shows the week days from Mo - Su as label and automatically adjusts to the language of the browser',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    themeType: {
      description: 'The elemnt type of the typography',
      control: {
        type: 'select',
      },
    },
    layer: {
      description: 'The variant how the typography should look like',
      control: {
        type: 'range', min: 0, max: 10, step: 1,
      },
    },

  },
  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof WeekDays>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <WeekDays {...args}/>,
  args: {
  },
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};
