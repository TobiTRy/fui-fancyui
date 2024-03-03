// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import RawRadio from './RawRadio';

// Define metadata for the story
const meta = {
  component: RawRadio,
  title: 'components/atoms/RawRadio',
  parameters: {
    docs: {
      description: {
        component:
          'The RawRadio component is a custom-styled radio button. It enhances the standard radio input with a sophisticated look and feel while preserving its native functionality. ',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    checked: {
      description: 'The checked state of the radio button',
      control: {
        type: 'boolean',
      },
    },
  },

  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof RawRadio>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <RawRadio {...args} />,
  args: {
    checked: false,
  },
};
