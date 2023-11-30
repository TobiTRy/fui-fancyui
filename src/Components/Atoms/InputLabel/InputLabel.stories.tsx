// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';
import themeStore from '../../design/theme/themeStore/themeStore';

// Import the component to be tested
import InputLabel from './InputLabel';

// Define metadata for the story
const meta = {
  component: InputLabel,
  parameters: {
    docs: {
      description: {
        component:
          'Is simply a label for the input. It is used to describe the input. The Parents are the Aligned and AnimatedInputLabel. <br> Its only used for grounding the design',
      },
    },
  },

  // Define arguments for the story
  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof InputLabel>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: () => <InputLabel>Label</InputLabel>,
  args: {
    theme: themeStore.getState().theme,
  },
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};
